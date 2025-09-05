// Minimal demo wiring (no real game logic yet)
const display = document.getElementById('display');
const coinsEl = document.getElementById('coins');
const roundEl = document.getElementById('round');
const targetEl = document.getElementById('target');
const currentEl = document.getElementById('current');
const turnsEl = document.getElementById('turns');

let coins = 0, round = 0, current = 0, turns = 0, target = 42;

function refresh() {
    display.textContent = String(current);
    coinsEl.textContent = coins;
    roundEl.textContent = round;
    currentEl.textContent = current;
    targetEl.textContent = target;
    turnsEl.textContent = turns;
}

document.querySelectorAll('.btn-key').forEach(btn => {
    btn.addEventListener('click', () => {
    const key = btn.dataset.key;
    const op = btn.dataset.op;
    if (key !== undefined) {
        // append digit
        current = Number(String(current) === '0' ? key : String(current) + key);
        turns++;
    } else if (op) {
        // For now, only equals resets for demo. Replace with your own logic later.
        if (op === '=') {
        if (current === target) { coins += 10; round = Math.min(round + 1, 20); }
        current = 0; turns++;
        }
    }
    refresh();
    });
});

refresh();