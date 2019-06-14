// 1. Copy and paste your prototype in here and refactor into class syntax.


//pasted and commented out prototype//


// function CuboidMaker(attributes){
//     this.length = attributes.length;
//     this.width = attributes.width;
//     this.height = attributes.height;
//   }




///added 1 at the end of CuboidMaker and cuboid to make it work for me since was previously declared in prototypes//

class CuboidMaker1 {
    constructor(props){
        this.length = props.length;
        this.width = props.width;
        this.height = props.height;
    }
    volume(){
        return this.length * this.width * this.height
    };
    surfaceArea(){
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
    };
}

const cuboid1 = new CuboidMaker1({
    length: 4,
    width: 5,
    height: 5,
});


//   CuboidMaker.prototype.volume = function(){
//     return this.length * this.width * this.height;
//   }

//   CuboidMaker.prototype.surfaceArea = function(){
//     return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
//   }

//   const cuboid = new CuboidMaker({
//     length: 4,
//     width: 5,
//     height: 5
//   })
  
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid1.volume()); // 100
console.log(cuboid1.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.