import Link from "next/link";
export default function Signin() {
 return (
   <div id="wd-signin-screen">
     <h2>Sri Ram Sathiya Narayanan</h2>
     <h3>Sign in</h3>
     <input defaultValue="SriRam" placeholder="username" className="wd-username" /> <br />
     <input defaultValue="12eqdw" placeholder="password" type="password" className="wd-password" /> <br />
     <Link id="wd-signin-btn" href="/Dashboard"> Sign in </Link> <br />
     <Link href="Signup" id="wd-signup-link"> Sign up </Link> <br />
      <a
        id="wd-github-link"
        href="https://github.com/sgsriram25/kambaz-next-js2"
        className="d-block text-decoration-underline text-primary"
        target="_blank"
        rel="noopener noreferrer"
      >
        My Github
      </a>
   </div>

   
);}
