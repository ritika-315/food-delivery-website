import { assets } from "../../assets/assets";
import "./AppDownload.css";

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
    <p>For Better Experience Download <br />Tomato App</p>
    <div className="app-download-platforms">
        <a href="https://play.google.com/store/games?device=windows&utm_source=apac_med&hl=en-IN&utm_medium=hasem&utm_content=Jan0324&utm_campaign=Evergreen&pcampaignid=MKT-EDR-apac-in-1707570-med-hasem-py-Evergreen-Jan0324-Text_Search_BKWS-BKWS%7CONSEM_kwid_43700065205026376_creativeid_535350509651_device_c&gad_source=1&gclid=Cj0KCQjwv7O0BhDwARIsAC0sjWPM78qM5W5NsDfmvqG7O5KCvno4q-dCvMOSY_QFJHZuBFetW4akclIaAstUEALw_wcB&gclsrc=aw.ds" target="_blank" rel="noopener noreferrer">
        <img src={assets.play_store} alt="Play Store"/></a>
        <a href="https://www.apple.com/in/app-store/" target="_blank" rel="noopener noreferrer">
        <img src={assets.app_store} alt="App Store" /></a>
    </div>
    </div>
  )
}

export default AppDownload
