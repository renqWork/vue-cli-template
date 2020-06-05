const getters = {
  sidebar: state => state.app.sidebar,
  size: state => state.app.size,
  permission_routes: state => state.permission.routes,
  roles: state => state.user.roles,
  avatar: state => state.user.avatar,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
}
export default getters
