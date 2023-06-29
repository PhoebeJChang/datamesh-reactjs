import React from "react";
import * as Components from './Components';

function App() {
    const [signIn, toggle] = React.useState(true);
     return(
         <Components.Container>
             <Components.SignUpContainer signinIn={signIn}>
                 <Components.Form>
                     <Components.Title>新用戶註冊</Components.Title>
                     <Components.Input type='text' placeholder='Username' />
                     <Components.Input type='email' placeholder='請輸入email' />
                     <Components.Input type='password' placeholder='請輸入密碼' />
                     <Components.Input type='password' placeholder='確認密碼' />
                     <Components.Button>一鍵註冊</Components.Button>
                 </Components.Form>
             </Components.SignUpContainer>

             <Components.SignInContainer signinIn={signIn}>
                  <Components.Form>
                      <Components.Title>登入</Components.Title>
                      <Components.Input type='email' placeholder='輸入電子郵件' />
                      <Components.Input type='password' placeholder='輸入密碼' />
                      <Components.Anchor href='#'>忘記密碼?</Components.Anchor>
                      <Components.Button>Log In</Components.Button>
                  </Components.Form>
             </Components.SignInContainer>

             <Components.OverlayContainer signinIn={signIn}>
                 <Components.Overlay signinIn={signIn}>

                 <Components.LeftOverlayPanel signinIn={signIn}>
                     <Components.Title>歡迎回來!</Components.Title>
                     <Components.Paragraph>
                         我已經註冊完畢，我要登入!
                     </Components.Paragraph>
                     <Components.GhostButton onClick={() => toggle(true)}>
                         Log In
                     </Components.GhostButton>
                     </Components.LeftOverlayPanel>
    
                     <Components.RightOverlayPanel signinIn={signIn}>
                       <Components.Title>嗨! 我是新用戶!</Components.Title>
                       <Components.Paragraph>
                           加入我們，立即註冊!
                       </Components.Paragraph>
                           <Components.GhostButton onClick={() => toggle(false)}>
                               我要註冊
                           </Components.GhostButton> 
                     </Components.RightOverlayPanel>
 
                 </Components.Overlay>
             </Components.OverlayContainer>

         </Components.Container>
     )
}



export default App;