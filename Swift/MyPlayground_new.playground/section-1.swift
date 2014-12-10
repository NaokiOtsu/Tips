// Playground - noun: a place where people can play

import SpriteKit
import XCPlayground

let width:CGFloat = 640.0
let height:CGFloat = 400.0

let view:SKView = SKView(frame: CGRectMake(0,0,width,height))

XCPShowView("Live view", view)

let scene:SKScene = SKScene(size: CGSizeMake(width, height))

scene.backgroundColor = SKColor.blackColor()
view.presentScene(scene)

let box:SKSpriteNode = SKSpriteNode(color: SKColor.blueColor(), size: CGSizeMake(200.0, 200.0))
box.position = CGPointMake(width/2.0, height/2.0)
scene.addChild(box)

let pi:CGFloat = 3.141592
box.runAction(SKAction.repeatActionForever(SKAction.rotateByAngle(pi*2.0, duration: 1)))

