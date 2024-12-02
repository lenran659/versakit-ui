export const useElementSize = (
  target: { offsetWidth: any; offsetHeight: any } | null,
) => {
  if (!target) return {}

  return {
    width: target.offsetWidth,
    height: target.offsetHeight,
  }
}
