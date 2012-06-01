class ApplicationController < ActionController::Base
  protect_from_forgery
def after_sign_in_path_for resource_or_scope
   if admin_signed_in? and current_admin.privilege == true
        return '/admin/home'
 end
  if user_signed_in?
	return'/home/login'
end
  if admin_signed_in? and current_admin.privilege == false
	return'/admin/staffhome'
         
   end
end
end
