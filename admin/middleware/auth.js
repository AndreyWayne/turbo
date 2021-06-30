export default function ({ app, redirect }) {
    if (app.$cookies.get('token') != 'admin') {
      return redirect('/auth');
    }
}
  