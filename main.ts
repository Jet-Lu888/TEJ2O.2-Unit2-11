/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Jet Lu
 * Created on: Sep 2020
 * This program generates and compares 2 numbers.
*/

// creating variables
let numberA: number = 0
let numberB: number = 1

// assign random values
numberA = randint(0, 99)
numberB = randint(0, 99)

// setup
basic.showIcon(IconNames.Happy)

// button a
input.onButtonPressed(Button.A, function () {
  basic.clearScreen()  
  basic.showString("#1 :" + numberA)
  pause(2000)
  basic.showIcon(IconNames.Happy)
})

// button b
input.onButtonPressed(Button.B, function () {
  basic.clearScreen()
  basic.showString("#2 :" + numberB)
  pause(2000)
  basic.showIcon(IconNames.Happy)
})

// shake
input.onGesture(Gesture.Shake, function () {
  basic.clearScreen()
  if (numberA > numberB )
    basic.showString(numberA + " > " + numberB)
  else
    basic.showString(numberA + " < " + numberB)
  pause(2000)
  basic.showIcon(IconNames.Happy)
})
