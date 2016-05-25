package es.urjc.code.daw.library.security;

class UserMin{
	private String usua;
	private String mail;
	public String getUsua() {
		return usua;
	}
	public void setUsua(String usua) {
		this.usua = usua;
	}
	public String getMail() {
		return mail;
	}
	public void setMail(String mail) {
		this.mail = mail;
	}
	public UserMin(String usua,String mail){
		this.usua=usua;
		this.mail=mail;
	}
	public UserMin(){

	}
}