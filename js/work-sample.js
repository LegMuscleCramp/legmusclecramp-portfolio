const workSampleSlider = {
    samples: [],
    currentSample: 0,

    init: function(workSample) {
        this.samples = workSample.querySelectorAll('.work-sample-demos > .work-sample-demo-item');
        
        workSample.querySelectorAll('[class^=demo-] > button')
        .forEach(sampleBtn => this.clickListener(sampleBtn, this.samples, this.currentSample));
    },

    clickListener: function(target, samples, currentSample) {
        target.addEventListener('click',function(e) {
            console.log(e)
        });
    }
}

document.querySelectorAll('.work-sample-container')
.forEach(workSampleContainer => workSampleSlider.init(workSampleContainer));