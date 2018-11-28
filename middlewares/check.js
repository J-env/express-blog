/**
 * @desc 当用户信息不存在，即认为用户没有登录，则跳转到登录页，
 * 同时显示 未登录 的通知，用于需要用户登录才能操作的页面
 */
function checkLogin (req, res, next) {
  if (!req.session.user) {
    req.flash('error', '未登录');
    return res.redirect('/signin');
  }
  next();
}

/**
 * @desc 当用户信息存在，即认为用户已经登录，则跳转到之前的页面，
 * 同时显示 已登录 的通知，如已登录用户就禁止访问登录、注册页面
 */
function checkNotLogin (req, res, next) {
  if (req.session.user) {
    req.flash('error', '已登录');
    return res.redirect('back');
  }
  next();
}

module.exports = {
  checkLogin,
  checkNotLogin
}
