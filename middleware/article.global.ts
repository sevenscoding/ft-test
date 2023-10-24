export default defineNuxtRouteMiddleware((to, from) => {
  const path = to.path;
  const nameRoute = '/article';
  const abortNameRoute = '/article-';

  if (path === nameRoute) return navigateTo('/');

  if (path.startsWith(abortNameRoute)) {
    return;
  }

  if (path.startsWith(nameRoute)) {
    let keys = path.replace(/\D/g,'');
    let fullPathTo = `${nameRoute}-${keys}`;
    return navigateTo(fullPathTo);
  }
})
