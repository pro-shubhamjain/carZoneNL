import { AxiosError } from 'axios';
import api from './api';

/**
 * Types for flattened modification item
 */
export type ModificationItem = {
  id: string;
  brand: string;
  model: string;
  generation: string;
  engine?: string;
  powerSystemHp?: number | null;
  batteryCapacity?: number | null;
  allElectricRange?: number | null;
  maxspeed?: number | null;
  drive?: string;
  fuel?: string;
  images?: string[]; // image URLs
  raw?: Record<string, unknown>; // original source object
};

function toNumberOrNull(v: unknown): number | null {
  if (v === undefined || v === null || v === '') return null;
  const n = Number(String(v).replace(/[^\d.-]/g, ''));
  return Number.isFinite(n) ? n : null;
}

function isObject(x: unknown): x is Record<string, unknown> {
  return typeof x === 'object' && x !== null;
}

/** Parse the uploaded data.json structure and flatten modifications (no `any`) */
export function parseDataJson(raw: unknown): ModificationItem[] {
  const out: ModificationItem[] = [];

  if (!isObject(raw)) {
    return out;
  }
  const root = raw as Record<string, unknown>;

  const brandsWrapper = root['brands'];
  if (!isObject(brandsWrapper)) {
    return out;
  }

  const brands = brandsWrapper['brand'];
  if (!Array.isArray(brands)) {
    return out;
  }

  for (const b of brands) {
    if (!isObject(b)) {
      continue;
    }
    const brandName = typeof b['name'] === 'string' ? b['name'] : '';

    const modelsWrapper = b['models'];
    if (!isObject(modelsWrapper)) {
      continue;
    }
    const models = modelsWrapper['model'];
    if (!Array.isArray(models)) {
      continue;
    }

    for (const m of models) {
      if (!isObject(m)) {
        continue;
      }
      const modelName = typeof m['name'] === 'string' ? m['name'] : '';

      const gensWrapper = m['generations'];
      if (!isObject(gensWrapper)) {
        continue;
      }
      const generations = gensWrapper['generation'];
      if (!Array.isArray(generations)) {
        continue;
      }
      for (const g of generations) {
        if (!isObject(g)) {
          continue;
        }
        const generationName = typeof g['name'] === 'string' ? g['name'] : '';

        // images (prefer big, fallback to small)
        const imagesList: string[] = [];
        if (isObject(g['images'])) {
          const images = (g['images'] as Record<string, unknown>)['image'];
          if (Array.isArray(images)) {
            for (const im of images) {
              if (!isObject(im)) {
                continue;
              }
              const big = im['big'];
              const small = im['small'];
              if (typeof big === 'string') imagesList.push(big);
              else if (typeof small === 'string') imagesList.push(small);
            }
          }
        }

        // modifications
        if (!isObject(g['modifications'])) {
          continue;
        }
        const modifications = (g['modifications'] as Record<string, unknown>)[
          'modification'
        ];
        if (!Array.isArray(modifications)) {
          continue;
        }

        for (const mod of modifications) {
          if (!isObject(mod)) {
            continue;
          }

          const id = mod['id'] !== undefined ? String(mod['id']) : '';
          const engine =
            typeof mod['engine'] === 'string' ? mod['engine'] : undefined;

          // powerSystemHp may appear in different fields
          const powerRaw = mod['powerSystemHp'] ?? mod['powerSystem'];
          const powerSystemHp = toNumberOrNull(powerRaw);

          const batteryCapacity = toNumberOrNull(mod['batteryCapacity']);
          const allElectricRange = toNumberOrNull(
            mod['allElectricRange'] ?? mod['allElectricRangeMin']
          );
          const maxspeed = toNumberOrNull(mod['maxspeed']);
          const drive =
            typeof mod['drive'] === 'string' ? mod['drive'] : undefined;
          const fuel =
            typeof mod['fuel'] === 'string' ? mod['fuel'] : undefined;

          const item: ModificationItem = {
            id,
            brand: brandName,
            model: modelName,
            generation: generationName,
            engine,
            powerSystemHp,
            batteryCapacity,
            allElectricRange,
            maxspeed,
            drive,
            fuel,
            images: imagesList.length ? imagesList : undefined,
            raw: mod,
          };

          out.push(item);
        }
      }
    }
  }

  return out;
}

export function mapApiError(err: unknown): {
  message: string;
  status?: number;
} {
  // Handle our own ApiError
  if (err instanceof ApiError) {
    return { message: err.message, status: err.status };
  }

  // Handle Axios errors
  if (err instanceof AxiosError) {
    if (!err.response) {
      return { message: 'Network error or no response from server' };
    }

    const status = err.response.status;
    const data = err.response.data as { message?: string } | undefined;

    switch (status) {
      case 400:
        return { message: data?.message ?? 'Bad request', status };
      case 401:
        return { message: 'Unauthorized — please login', status };
      case 403:
        return { message: 'Forbidden', status };
      case 404:
        return { message: 'Not found', status };
      default:
        if (status >= 500) {
          return { message: 'Server error — try again later', status };
        }
        return {
          message: data?.message ?? `Request failed (${status})`,
          status,
        };
    }
  }

  // Fallback: plain Error or something else
  if (err instanceof Error) {
    return { message: err.message };
  }

  return { message: String(err) };
}

/** Fetch and return flattened list of modifications (supports AbortSignal) */
export async function getModifications(
  signal?: AbortSignal
): Promise<ModificationItem[]> {
  const res = await api.get('/data.json', { signal });
  const raw = res.data;
  const items = parseDataJson(raw);
  return items;
}

export class ApiError extends Error {
  public status?: number;

  constructor(message: string, status?: number) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    // restore prototype chain (needed for ES5 targets)
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

/** Get single modification by id */
export async function getModificationById(
  id: number,
  signal?: AbortSignal
): Promise<ModificationItem> {
  const list = await getModifications(signal);
  const found = list.find((x) => x.id === String(id));
  if (!found) {
    throw new ApiError('Modification not found', 404);
  }
  return found;
}

/** Update (client-side fallback). Replace with real API call when available. */
export async function updateModification(
  item: ModificationItem
): Promise<ModificationItem> {
  // For local/dev where public/data.json is static, just return the item.
  // `async` ensures this returns a Promise<ModificationItem>.
  return item;
}
