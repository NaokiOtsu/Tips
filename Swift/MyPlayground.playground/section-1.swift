// Playground - noun: a place where people can play

import SpriteKit
import XCPlayground

let witdh:CGFloat = 640.0
let height:CGFloat = 480.0

let view:SKView = SKView(frame: CGRectMake(0,0,width,height))

XCPShowView("Live View", view)

let scene:SKScene = SKScene(size: CGSizeMake(width, height))

scene.backgroundColor = SKColor.blackColor()
view.
