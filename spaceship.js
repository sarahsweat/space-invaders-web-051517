class Spaceship {
  constructor(name, crew, phasers, shields) {
    this.name = name
    this.cloaked = false
    this.phasers = phasers
    this.shields = shields
    this.warpDrive = "disengaged"
    this.crew = crew
    if (this.crew.length < 1) {
      this.docked = true
    } else {
      this.docked = false

    }
    this.phasersCharge = "uncharged"
    this.assignCrewToShip()

  }

  assignCrewToShip() {
    this.crew.forEach(crewMember => {crewMember.currentShip = this})
  }
}
