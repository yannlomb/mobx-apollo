import { computed, extendObservable } from 'mobx';
import { fromResource } from 'mobx-utils';

export const queryToObservable = (query, { onError, onFetch, prop }) => {
  let subscription;

  return fromResource(
    sink =>
      (subscription = query.subscribe({
        next: ({ data }) => {
          sink(Object.keys(data).length === 1 ? data[prop] : data);
          onFetch && onFetch(data);
        },
        error: error => onError && onError(error)
      })),
    () => subscription.unsubscribe()
  );
};

export const query = (obj, prop, descriptor) => {
  const decorated = descriptor.initializer;

  const privateName = `_${prop}`;

  const { client, onError, onFetch, ...options } = decorated
    ? descriptor.initializer()
    : descriptor;

  const ref = extendObservable(obj, {
    [privateName]: queryToObservable(client.watchQuery(options), {
      onError,
      onFetch,
      prop
    }),
    [prop]: computed(() => obj[privateName].current())
  });

  if (decorated) return ref;
};
