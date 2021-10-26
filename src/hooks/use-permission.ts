import { useStore } from 'vuex';
export function usePermission(pageName: string, handleName: string) {
  const stroe = useStore();
  const permissions = stroe.state.login.permissions;
  const verifyPermissions = `system:${pageName}:${handleName}`;
  return !!permissions.find((item: string) => item === verifyPermissions);
}
