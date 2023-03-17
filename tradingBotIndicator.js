//Trading Bot Indicator 

//@version=5
indicator("Volume Increase Alert", shorttitle="VIA")

// Inputs
var float volumeThresholdPercent = input(5, title="Volume Threshold (%)", minval=0, maxval=100)

// Calculate volume change percentage
var float volumePercentChange = change(volume) / volume * 100

// Check if volume percent change is greater than threshold on 25 minute time frame
var bool volumeIncrease25m = timeframe.isseconds and timeframe.multiplier == 25 and volumePercentChange >= volumeThresholdPercent

// Generate buy signal if volume increase on 25 minute time frame
if volumeIncrease25m
    strategy.entry("Buy", strategy.long)
    alert("Volume increase on 25 minute time frame!")