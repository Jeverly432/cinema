type Mods = Record<string, boolean | string>

export const classNames = (cls: string, mods: Mods = {}, additional: (string | undefined)[] = []): string => [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods).filter(([_, mode]) => mode)
        .map(([className]) => className),
].join(' ')
