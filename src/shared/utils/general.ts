export const includesString = (label: string, text: string): boolean => {
    return label.toLocaleLowerCase().includes(text.toLocaleLowerCase())
}
