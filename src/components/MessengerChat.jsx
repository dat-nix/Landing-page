import { useEffect } from "react";

const MessengerChat = () => {
    useEffect(() => {
        //Create Facebook Messenger Plugin
        window.fbAsyncInit = function () {
            FB.init({
                xfbml: true,
                version: "v18.0", //Use the lastest FB SDK version
            });
    };
    // Load the Facebook SDK script
    (function (d, s, id) {
        let js,
            fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
        fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
}, []);
    
return (
        <>
        {/* Messenger Plugin Root */ }
        <div id="fb-root"></div>
        {/* Messenger Chat Plugin */}
        <div
            
            className="fb-customerchat"
            attribution="setup_tool"
            page_id="252598731267210" // Facebook Page ID
            theme_color="#0084FF"
            logged_in_greeting="Contact us!"
            logged_out_greeting="Feel free to reach out!"
        >
        </div>
    </>
)

};


export default MessengerChat;