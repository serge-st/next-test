export const timeout = async (num: number): Promise<void> => {
    return new Promise(res => {
        setTimeout(() => res(), num)
    })
}
