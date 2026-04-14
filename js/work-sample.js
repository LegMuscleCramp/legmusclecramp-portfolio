const workSampleSlider = {
    samples: [],

    init: function(workSample) {
        this.samples = workSample.querySelectorAll('.work-sample-demos > .work-sample-demo-item');
        
        const sampleBtns = workSample.querySelectorAll('[class^=demo-] > button')
        .forEach(sampleBtn => this.clickListener(sampleBtn));
    },

    clickListener: function(target) {
        target.addEventListener('click',function(e) {
            const clickTarget = e.currentTarget;
            
        })
    }
}

document.querySelectorAll('.work-sample-container')
.forEach(workSampleContainer => workSampleSlider.init(workSampleContainer));