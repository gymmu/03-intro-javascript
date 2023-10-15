const assert = chai.assert

describe("Aufgabe 1", () => {
  it("Die Funktion sayHello sollte existieren", () => {
    assert.equal(typeof sayHello, "function")
  })
})

describe("Aufgabe 2", () => {
  it("Die Funktion 'changeBackground' sollte existieren", () => {
    assert.equal(typeof changeBackground, "function")
  })
  it("Sollte die Hintergrundfarbe von body verändern", () => {
    const body = document.querySelector("body")
    const bgColor = document.querySelector("body").style.backgroundColor
    changeBackground()
    const bgColorNew = document.querySelector("body").style.backgroundColor
    assert.notEqual(bgColor, bgColorNew)
    body.style.backgroundColor = bgColor
  })
})
