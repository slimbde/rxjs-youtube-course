import { of, from, Observable } from 'rxjs'
import { scan } from 'rxjs/operators'


//const stream$ = of(1, 2, 3, 4, 5, 6)
//stream$.subscribe(val => console.log(val)).pipe

//const arr$ = from([1, 2, 3, 4, 5]).pipe(scan((acc, val) => acc.concat(val), []))
//arr$.subscribe(val => console.log(val))

const stream$ = new Observable(observer => {
  observer.next('First value')
  setTimeout(() => observer.next('Second value'), 1000)
  setTimeout(() => observer.error("Something went wrong"), 1000)
  setTimeout(() => observer.next("Third value"), 3000)
})


stream$.subscribe(val => console.log(val), error => console.error("[exception]:", error))

