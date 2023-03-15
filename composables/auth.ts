export const useAuth = () => {
  const isAuth = ref<boolean>(false)

  return {
    isAuth,
  }
}
