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
  basic.showString("#1 =" + numberA)
})

// button b
input.onButtonPressed(Button.B, function () {
  basic.showString("#1 =" + numberB)
})

// shake
input.onGesture(Gesture.Shake, function () {
  if (numberA > numberB )
    basic.showString(numberA + " > " + numberB)
  else
    basic.showString(numberA + " < " + numberB)
})
