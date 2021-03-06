define(["../components"],function(Components){
  return function MovementInputSystem(entityManager, inputs){

    let entities = entityManager.registerQueryTemplate(new Set([Components.Heading.name, Components.Velocity.name, Components.InputListener.name]))

    let turnSpeed = .1

    this.Run = function(){

      entities.forEach( e => {
        //  Change heading on A, D
        if (inputs[65]){
          e.Heading.theta += turnSpeed
        }

        if (inputs[68]){
          e.Heading.theta -= turnSpeed
        }

        //   Add speed on W
        if (inputs[87]){
          e.Velocity.vx += Math.cos(e.Heading.theta) * .3
          e.Velocity.vy -= Math.sin(e.Heading.theta) * .3
        }

      });
    }
  }
})
