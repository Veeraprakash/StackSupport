class Sendmail < ActionMailer::Base
  default :from => "from@example.com"

def sendpassword(email,password)
       mail(:to=>email, :subject=>"SupportStack Username & Password", :body=>"Welcome to Support Stack. Your Support Stack user name : "+email+" and password : "+password)
  end
end
