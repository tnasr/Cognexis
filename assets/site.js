document.getElementById('yr') && (document.getElementById('yr').textContent = new Date().getFullYear());

function copyEmail(email){
  if(!navigator.clipboard) return;
  navigator.clipboard.writeText(email).then(() => toast('Email copied to clipboard.'));
}
function toast(text){
  const msg = document.createElement('div');
  msg.textContent = text;
  msg.style.position='fixed';
  msg.style.left='50%';
  msg.style.bottom='20px';
  msg.style.transform='translateX(-50%)';
  msg.style.padding='10px 12px';
  msg.style.borderRadius='12px';
  msg.style.background='#ffffff';
  msg.style.border='1px solid #e5e7eb';
  msg.style.color='#111827';
  msg.style.boxShadow='0 10px 24px rgba(17,24,39,.12)';
  msg.style.zIndex='9999';
  document.body.appendChild(msg);
  setTimeout(()=> msg.remove(), 1600);
}