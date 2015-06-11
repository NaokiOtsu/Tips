//
//  ViewController.swift
//  test1
//
//  Created by Naoki Otsu on 2015/06/11.
//  Copyright (c) 2015年 NaokiOtsu. All rights reserved.
//

import UIKit

class ViewController: UIViewController {

    @IBOutlet weak var mainImage: UIImageView!
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }

    @IBAction func visible(sender: AnyObject) {
        mainImage.hidden = false;
    }

    @IBAction func hidden(sender: AnyObject) {
        mainImage.hidden = true;
    }
}

