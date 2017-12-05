;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-search" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M953.504 908.256l-152.608-163.296c61.856-74.496 95.872-167.36 95.872-265.12 0-229.344-186.624-415.968-416.032-415.968-229.344 0-415.968 186.592-415.968 415.968s186.624 415.968 416 415.968c60.096-0.032 118.048-12.576 172.224-37.248 16.096-7.328 23.2-26.304 15.872-42.368-7.328-16.128-26.4-23.264-42.368-15.872-45.856 20.864-94.88 31.456-145.76 31.488-194.08 0-351.968-157.888-351.968-351.968 0-194.048 157.888-351.968 351.968-351.968 194.112 0 352.032 157.888 352.032 351.968 0 91.36-34.848 177.92-98.08 243.744-12.256 12.736-11.84 32.992 0.864 45.248 0.96 0.928 2.208 1.28 3.296 2.08 0.864 1.28 1.312 2.752 2.4 3.904l165.504 177.088c6.272 6.752 14.816 10.144 23.36 10.144 7.84 0 15.68-2.848 21.856-8.64C964.864 941.408 965.568 921.152 953.504 908.256z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-deliver" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M352 576 224 576c-17.664 0-32-14.304-32-32 0-17.664 14.336-32 32-32l96 0 0-96c0-17.664 14.336-32 32-32s32 14.336 32 32l0 128C384 561.696 369.664 576 352 576z"  ></path>' +
    '' +
    '<path d="M702.144 666.88c-61.952 0-113.664 43.296-127.296 101.12l-123.808 0c-13.568-57.888-65.344-101.216-127.328-101.216-72.288 0-131.104 58.784-131.104 131.072 0 72.352 58.816 131.232 131.104 131.232 60.384 0 110.848-41.344 125.984-97.056l126.432 0c15.104 55.712 65.568 96.992 126.016 96.992 72.224 0 131.008-58.784 131.008-131.072S774.368 666.88 702.144 666.88zM323.744 865.056c-36.992 0-67.104-30.144-67.104-67.232 0-36.96 30.08-67.072 67.104-67.072 36.992 0 67.072 30.08 67.072 67.072C390.816 834.912 360.736 865.056 323.744 865.056zM702.144 864.992c-36.96 0-67.072-30.08-67.072-67.072s30.08-67.072 67.072-67.072c36.928 0 67.008 30.08 67.008 67.072S739.104 864.992 702.144 864.992z"  ></path>' +
    '' +
    '<path d="M864.032 96 399.744 96C355.776 96 320 131.776 320 175.744l0 92.512L125.344 366.08c-1.376 0.704-2.72 1.504-4 2.4-36.096 25.376-56 64.96-56 111.52l0 321.984c0 17.696 14.336 32 32 32s32-14.304 32-32L129.344 480c0-25.024 9.088-44.512 27.04-57.888l209.984-105.504c1.44-0.704 2.368-1.984 3.648-2.88 1.888-1.312 3.776-2.496 5.312-4.16 1.408-1.536 2.336-3.328 3.424-5.056 1.088-1.728 2.24-3.328 2.976-5.28 0.8-2.176 1.024-4.416 1.344-6.688C383.328 290.976 384 289.6 384 288L384 175.744C384 167.072 391.072 160 399.744 160l464.288 0C881.664 160 896 174.592 896 192.512L896 800c0 17.696 14.304 32 32 32s32-14.304 32-32L960 192.512C960 139.296 916.928 96 864.032 96z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-more" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M224 608c-52.928 0-96-43.072-96-96s43.072-96 96-96c52.928 0 96 43.072 96 96S276.928 608 224 608z"  ></path>' +
    '' +
    '<path d="M512 608c-52.928 0-96-43.072-96-96s43.072-96 96-96c52.928 0 96 43.072 96 96S564.928 608 512 608z"  ></path>' +
    '' +
    '<path d="M800 608c-52.928 0-96-43.072-96-96s43.072-96 96-96c52.928 0 96 43.072 96 96S852.928 608 800 608z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-cart" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M940.8 284.8c-16-19.2-38.4-28.8-64-28.8H352c-19.2 0-32 12.8-32 32s12.8 32 32 32h524.8c6.4 0 12.8 3.2 16 6.4 3.2 3.2 6.4 9.6 3.2 19.2l-48 336c0 9.6-12.8 19.2-25.6 19.2h-38.4-3.2-444.8c-12.8 0-25.6-16-25.6-28.8L256 300.8l-28.8-156.8C220.8 99.2 182.4 64 134.4 64H96c-19.2 0-32 16-32 32s12.8 32 32 32h38.4c12.8 0 25.6 9.6 28.8 25.6L192 310.4l51.2 371.2C249.6 729.6 288 768 332.8 768h486.4c44.8 0 83.2-32 89.6-73.6L960 355.2c3.2-25.6-3.2-51.2-19.2-70.4z" fill="#666666" ></path>' +
    '' +
    '<path d="M323.2 896m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" fill="#666666" ></path>' +
    '' +
    '<path d="M832 896m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" fill="#666666" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-home" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M96 480c-9.6 0-19.2-3.2-25.6-12.8-12.8-12.8-9.6-35.2 3.2-44.8l377.6-310.4c35.2-25.6 86.4-25.6 118.4 0l377.6 307.2c12.8 9.6 16 32 3.2 44.8-12.8 12.8-32 16-44.8 3.2L531.2 166.4c-9.6-6.4-28.8-6.4-38.4 0L115.2 473.6c-6.4 6.4-12.8 6.4-19.2 6.4zM816 928H608c-19.2 0-32-12.8-32-32v-150.4c0-22.4-38.4-44.8-67.2-44.8-28.8 0-64 19.2-64 44.8V896c0 19.2-12.8 32-32 32H211.2C163.2 928 128 892.8 128 848V544c0-19.2 12.8-32 32-32s32 12.8 32 32v304c0 9.6 6.4 16 19.2 16H384v-118.4c0-64 67.2-108.8 128-108.8s131.2 44.8 131.2 108.8V864h176c9.6 0 16 0 16-19.2V544c0-19.2 12.8-32 32-32s32 12.8 32 32v304C896 896 864 928 816 928z" fill="#666666" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-refresharrow" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M822.624 521.376c-12.512-12.512-32.736-12.512-45.248 0L544 754.752 544 192c0-17.664-14.336-32-32-32s-32 14.336-32 32l0 562.752-233.376-233.376c-12.512-12.512-32.736-12.512-45.248 0s-12.512 32.736 0 45.248l288 287.968c2.944 2.976 6.496 5.312 10.432 6.944C503.68 863.168 507.84 864 512 864s8.32-0.832 12.224-2.464c3.936-1.632 7.456-3.968 10.432-6.944l288-287.968C835.136 554.112 835.136 533.888 822.624 521.376z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-my" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M800 384c0-160-128-288-288-288s-288 128-288 288c0 108.8 57.6 201.6 147.2 249.6-121.6 48-214.4 153.6-240 288-3.2 16 6.4 35.2 25.6 38.4h6.4c16 0 28.8-9.6 32-25.6 28.8-150.4 160-259.2 313.6-262.4h6.4c156.8 0 284.8-128 284.8-288zM288 384c0-124.8 99.2-224 224-224s224 99.2 224 224c0 121.6-99.2 220.8-220.8 224H505.6C384 604.8 288 505.6 288 384zM723.2 675.2c-16-9.6-35.2-6.4-44.8 9.6-9.6 16-6.4 35.2 9.6 44.8 73.6 51.2 124.8 121.6 140.8 204.8 3.2 16 16 25.6 32 25.6h6.4c16-3.2 28.8-19.2 25.6-38.4-19.2-99.2-80-185.6-169.6-246.4z" fill="#666666" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)