import Physics from 'matter-js'

export function createPlayerBox() {
  const body = Physics.Bodies.rectangle(
    offset.value.x,
    offset.value.y,
    Styles.box.width,
    Styles.box.height
  )
  const composite = Matter.Composite.add(matter.engine.world, body);
  return { body, composite }
}
