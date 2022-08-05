export default {
    bedroom: [{
        h:2.70, 
        w:2.40, 
        type: 'min', 
        id: 'bedroom', 
        area: function() { 
            return this.h * this.w
        }
        }, 
        {
        h:4.00, 
        w:4.20, 
        type: 'max', 
        id: 'bedroom' ,
        area: function() { 
            return this.h * this.w
        }
    }],
    bathroom: [{
        h:1.50, 
        w:2.10, 
        type:  'min', 
        id: 'bathroom',
        area: function() { 
            return this.h * this.w
        }
    }, {
        h:3.20, 
        w:2.00, 
        type: 'max', 
        id: 'bathroom',
        area: function() { 
            return this.h * this.w
        }
    }],
    kitchen: [{
        h: 2.40, 
        w: 2.00, 
        type: 'min', 
        id: 'kitchen',
        area: function() { 
            return this.h * this.w
        }
    }, {
        h: 3.60, 
        w: 4.00, 
        type: 'max', 
        id: 'kitchen',
        area: function() { 
            return this.h * this.w
        }
    }],
    dining:[{
        h: 2.20, 
        w: 2.40, 
        type: 'min', 
        id: 'Dining',
        area: function() { 
            return this.h * this.w
        }
    },{
        h: 3.00,  
        w: 4.20, 
        type: 'max', 
        id: 'Dining',
        area: function() { 
            return this.h * this.w
        } 
    }]
}