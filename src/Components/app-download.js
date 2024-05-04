import React from 'react';
import './download-app.css'

export default function AppDownloadBox() {
  return (
    
    <div className="app-download-box-body">
      <div className="app-download-box">
        <h1>ENJOY THE APP!</h1>
        <div className="app-download-lower-area">
          <div className="app-download-lower-area-1">
            <div className="h1">
              <img src="https://s3.rdbuz.com/web/images/homeV2/appinstall/tick.svg" alt="tick" />
              <span>Quick Access</span>
            </div>
            <div className="h2">
              <img src="https://s3.rdbuz.com/web/images/homeV2/appinstall/tick.svg" alt="tick" />
              <span>Superior live tracking</span>
            </div>
            <div className="ratings">
              <div className="rating-1">
                <div className="rate">4.5 &#9733; </div>
                <div style={{ color: '#4a4a4a', height: '100%', wordBreak: 'break-word', fontFamily: 'Montserrat', fontSize: '14px', fontWeight: '400', marginBottom: '10px' }}>50M+ Downloads </div>
                <div style={{ color: '#1D1D1D', fontSize: '14px', fontWeight: '600' }}>Play Store</div>
              </div>
              <div></div>
              <div className="rating-2">
                <div className="rate">4.6 &#9733; </div>
                <div style={{ color: '#4a4a4a', height: '100%', wordBreak: 'break-word', fontFamily: 'Montserrat', fontSize: '14px', fontWeight: '400' }}>50M+ Downloads</div>
                <div style={{ color: '#1D1D1D', fontSize: '14px', fontWeight: '600' }}>App Store</div>
              </div>
            </div>
          </div>
          <div className="app-download-lower-area-2">
            <span style ={{ width: '119px',fontSize: '20px', fontWeight: '700', lineHeight: '20px', color: 'rgb(255, 255, 255)', marginBottom: '10px',
}}>Scan to download</span>
            <img src="https://s1.rdbuz.com/web/images/homeV2/qrCode.svg" alt="QR Code" />
          </div>
          <div className="app-download-lower-area-3">
            <span style={{width: '119px', fontSize: '20px', fontWeight: '700', lineHeight: '20px', color: 'rgb(255, 255, 255)', marginTop: '0',marginBottom: '25px'}}> Download the App on</span>
            <img className="play-store" src="https://s2.rdbuz.com/web/images/homeV2/appinstall/playStore.svg" alt="Play Store" height="42px" width="145px" />
            <img src="https://s3.rdbuz.com/web/images/homeV2/appinstall/appStore.svg" alt="App Store" height="46px" width="147px" />
          </div>
        </div>
      </div>
    </div>
  );
}
