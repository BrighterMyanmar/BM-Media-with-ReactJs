import React from 'react';
import ReactDOM from 'react-dom';
import loadingImg from '../../statics/loading.gif';

export default function Loading() {
   return ReactDOM.createPortal(
      <div className="loadingBox">
         <img src={loadingImg} />
      </div>,
      document.getElementById('portal')
   )
}
