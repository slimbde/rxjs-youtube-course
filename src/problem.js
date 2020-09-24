import { interval } from 'rxjs'
import { filter, map, take, scan } from 'rxjs/operators'


const btn = document.getElementById('interval')
const rxjsBtn = document.getElementById('rxjs')
const display = document.querySelector('#problem .result')

const people = [
  { name: 'Vladilen', age: 25 },
  { name: 'Elena', age: 17 },
  { name: 'Ivan', age: 18 },
  { name: 'Igor', age: 14 },
  { name: 'Lisa', age: 32 },
  { name: 'Irina', age: 23 },
  { name: 'Oleg', age: 20 }
]


btn.addEventListener("click", () => {
  let i = 0
  const adults = []

  const interval = setInterval(() => {
    btn.disabled = true

    if (people[i]) {
      if (people[i].age > 18)
        adults.push(people[i].name)

      display.textContent = adults.join(', ')
      ++i
      return
    }

    clearInterval(interval)
    display.innerHTML = ''
    btn.disabled = false;
  }, 1000);
})


rxjsBtn.addEventListener("click", () => {
  rxjsBtn.disabled = true

  interval(1000)
    .pipe(
      take(people.length),
      filter(value => people[value].age >= 18),
      map(value => people[value].name),
      scan((res, curr) => res.concat(curr), [])
    )
    .subscribe(result => {
      display.textContent = result.join(' ')
    }, null, () => rxjsBtn.disabled = false)

})