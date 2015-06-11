//
//  ViewController.swift
//  FortuneTelling
//
//  Created by Naoki Otsu on 2015/06/11.
//  Copyright (c) 2015年 NaokiOtsu. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    
    @IBOutlet var animalLabel: UILabel!
    @IBOutlet var resultLabel: UILabel!
    
    @IBAction func tellFortune() {
        let randomNum = Int(arc4random_uniform(3))
        
        if randomNum == 0 {
            animalLabel.text = "🐶"
            resultLabel.text = "大吉"
        } else if (randomNum == 1) {
            animalLabel.text = "🐱"
            resultLabel.text = "中吉"
        } else if (randomNum == 2) {
            animalLabel.text = "🐒"
            resultLabel.text = "小吉"
        } else if (randomNum == 3) {
            animalLabel.text = "🐴"
            resultLabel.text = "末吉"
        }
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }


}

