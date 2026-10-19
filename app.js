// ---------- Mini bar charts (mock data) ----------
function buildBars(id, count, max){
  const el = document.getElementById(id);
  if(!el) return;
  el.innerHTML = '';
  for(let i=0;i<count;i++){
    const h = Math.round(Math.random()*max)+6;
    const bar = document.createElement('div');
    bar.className = 'bar';
    bar.style.height = h+'px';
    el.appendChild(bar);
  }
}
buildBars('miniBars', 7, 72);
buildBars('miniBars2', 7, 50);

// ---------- Left / Right business toggle (mock) ----------
const bizData = {
  left:  { totalBV:'1', currentBV:'1', active:'1', totalPV:'0', currentPV:'0', inactive:'0' },
  right: { totalBV:'1', currentBV:'1', active:'1', totalPV:'0', currentPV:'0', inactive:'0' }
};
function switchBiz(btn, side){
  btn.parentElement.querySelectorAll('.seg-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const d = bizData[side];
  document.getElementById('bv-total').textContent = d.totalBV;
  document.getElementById('bv-current').textContent = d.currentBV;
  document.getElementById('bv-active').textContent = d.active;
  document.getElementById('pv-total').textContent = d.totalPV;
  document.getElementById('pv-current').textContent = d.currentPV;
  document.getElementById('pv-inactive').textContent = d.inactive;
}

// ---------- Balance tabs (mock) ----------
const balances = {
  'Exchange balance': '4000.00',
  'Earning Balance': '5000.00',
  'Available Balance': '5000.00',
  'Staking Balance': '5000.00'
};
document.querySelectorAll('.balance-tab').forEach(tab=>{
  tab.addEventListener('click', ()=>{
    document.querySelectorAll('.balance-tab').forEach(t=>t.classList.remove('active'));
    tab.classList.add('active');
    const label = tab.textContent.trim();
    document.getElementById('balanceLabel').textContent = label;
    document.getElementById('balanceVal').textContent = balances[label];
  });
});

// ---------- Bottom tabs ----------
document.querySelectorAll('#bottomTabs button').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    document.querySelectorAll('#bottomTabs button').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    ['logins','loadbal','exwithdraw'].forEach(id=>{
      document.getElementById('tab-'+id).classList.toggle('d-none', 'tab-'+id !== 'tab-'+btn.dataset.tab);
    });
  });
});

// ---------- Mock login history rows ----------
const rows = [
  {date:'10/19/2026', time:'13:39:28', ip:'xxxx:xxxx:xxxx:xxxx::xxxx'},
  {date:'10/19/2026', time:'13:38:32', ip:'xxxx:xxxx:xxxx:xxxx::xxxx'},
  {date:'10/18/2026', time:'09:12:04', ip:'xxxx:xxxx:xxxx:xxxx::xxxx'},
  {date:'10/17/2026', time:'20:04:51', ip:'xxxx:xxxx:xxxx:xxxx::xxxx'}
];
const tbody = document.getElementById('loginRows');
if(tbody){
  rows.forEach(r=>{
    tbody.insertAdjacentHTML('beforeend',
      `<tr><td>${r.date}</td><td>${r.time}</td><td class="ip-text">${r.ip}</td></tr>`);
  });
}

// ---------- Countdown (purely visual, mock) ----------
let secs = 10*3600 + 10*60 + 41;
const countdownEl = document.getElementById('countdown');
if(countdownEl){
  setInterval(()=>{
    secs = Math.max(0, secs-1);
    const h = String(Math.floor(secs/3600)).padStart(2,'0');
    const m = String(Math.floor((secs%3600)/60)).padStart(2,'0');
    const s = String(secs%60).padStart(2,'0');
    countdownEl.textContent = `${h}H : ${m}M : ${s}S`;
  },1000);
}

// ---------- Dismiss notice bar ----------
const closeNotice = document.getElementById('closeNotice');
if(closeNotice){
  closeNotice.addEventListener('click', ()=>{
    document.getElementById('noticeBar').style.display = 'none';
  });
}
