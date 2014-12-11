//
//  GameScene.swift
//  Game1
//
//  Created by Naoki Otsu on 2014/12/10.
//  Copyright (c) 2014年 Naoki Otsu. All rights reserved.
//

import SpriteKit

class GameScene: SKScene {
    override func didMoveToView(view: SKView) {
        let sprite = SKSpriteNode(imageNamed: "211902_150.png")
        println(sprite)
        sprite.position = CGPoint(x: 100, y: 100)
//        sprite.size = view.bounds.size
        
        self.addChild(sprite)
    }
    
    override func update(currentTime: CFTimeInterval) {
        /* Called before each frame is rendered */
    }
}
