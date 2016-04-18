var camera = [
  0, 1, 2, // x,y,z coordinates
  1, 1, 1, // Direction normal vector
  45 // field of view : example 45
];

var lights = [
   2,                         // number of lights                                                                                    
   -400,200,-20, 1,1,1,        // light 1, x,y,z location, and rgb colour (green)                                                     
    -800, 200, -5, 1, 1, 1         // light 2, x,y,z location, and rgb colour (white)                                                     
];

// var objects = [
//    5,                                                                             // number of objects                               
//    ObjTyp.SPHERE,      13, 1.0,0.0,0.0,  0.2, 0.7,0.1, 1.0, 10,50,50, 40,           
//    //       typ,    recsz,   r,  g,  b, spec,lamb,amb,opac,  x, y, z,rad,           
//    ObjTyp.CUBOID,      18, 1.0,0.0,0.0,  0.2, 0.7,0.1, 1.0, 10,20,40, 40, 20, 10,  1, 1, 1,           
//    //       typ,    recsz,   r,  g,  b, spec,lamb,amb,opac,  x, y, z,wid,hgt,dep, xd,yd,zd,
//    ObjTyp.CYLINDER,    17, 1.0,0.0,0.0,  0.2, 0.7,0.1, 1.0, 10,20,30,  40, 10,     1, 1, 1,
//    //       typ,    recsz,   r,  g,  b, spec,lamb,amb,opac,  x, y, z, rad,hgt,    xd,yd,zd,
//    ObjTyp.CONE,        17, 1.0,0.0,0.0,  0.2, 0.7,0.1, 1.0, 10,20,30,  40, 10,     1, 1, 1,       
//    //       typ,    recsz,   r,  g,  b, spec,lamb,amb,opac,  x, y, z, rad,hgt,    xd,yd,zd,
//    ObjTyp.TRIANGLE,    19, 1.0,0.0,0.0,  0.2, 0.7,0.1, 1.0, 10,20,30,  10,20,40  40,50,60,     2
//    //       typ,    recsz,   r,  g,  b, spec,lamb,amb,opac, x1,y1,z1,  x2,y2,z2, x3,y3,z3,  width,
// ]

var objects = [
      2,                                                                             // number of objects                               
      ObjTyp.SPHERE, 13, 0.76, 0.80, 0.06, 0.2, 0.7, 0.1, 1.0, 0, 0, -15, 3.5,           // typ,recsz,r,g,b,spec,lamb,amb,opac, x,y,z,rad,           
      ObjTyp.SPHERE, 13, 0.12, 0.56, 1.0, 0.2, 0.7, 0.1, 1.0, 1000, 500, -15, 0.5,           // typ,recsz,r,g,b,spec,lamb,amb,opac, x,y,z,rad,            
      // ObjTyp.CUBOID,      18, 1.0,0.0,0.0,  0.2, 0.7,0.1, 1.0, 3000,2000,-20, 40, 20, 10,  1, 1, 1,
      // ObjTyp.CYLINDER,    17, 1.0,0.0,0.0,  0.2, 0.7,0.1, 1.0, 10,20,30,  40, 10,     1, 1, 1,
      // ObjTyp.CONE,        17, 1.0,0.0,0.0,  0.2, 0.7,0.1, 1.0, 10,20,30,  40, 10,     1, 1, 1
      // ObjTyp.TRIANGLE,    19, 1.0,0.0,0.0,  0.2, 0.7,0.1, 1.0, 1000,1800,-20,  1000,1200,-20  2000,500,-20,     2
   ]