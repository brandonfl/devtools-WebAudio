<!DOCTYPE html>
<html lang="en-US">
<head>
  <meta charset="utf-8" />
  <link href="/static/icons/search.png" rel="shortcut icon">
  <title>browser_audionode-actor-get-automation-data-01.js - mozsearch</title>
  <link href="/static/css/mozsearch.css" rel="stylesheet" type="text/css" media="screen"/>
  <link href="/static/css/icons.css" rel="stylesheet" type="text/css" media="screen"/>
  <link href="/static/css/selector-common.css" rel="stylesheet" type="text/css" media="screen"/>
  <link href="/static/css/filter.css" rel="stylesheet" type="text/css" media="screen"/>
  <link href="/static/css/xcode.css" rel="stylesheet" type="text/css" media="screen"/>
</head>

<body class="old-rev">
  <form method="get" action="/mozilla-central/search" id="basic_search" class="search-box">
    <fieldset>
      <div id="search-box" class="h-flex-container" role="group">
        <div id="query-section">
          <label for="query" class="query_label visually-hidden">Find</label>
          <input type="text" name="q" value="" maxlength="2048" id="query" accesskey="s" title="Search" placeholder="Search mozilla-central" autocomplete="off" />
          <div class="zero-size-container">
            <div class="bubble" id="query-bubble">
            </div>
          </div>
          <section id="spinner"></section>
        </div>
        <div id="option-section" class="v-flex-container">
          <label for="case">
            <input type="checkbox" name="case" id="case" class="option-checkbox" value="true" accesskey="c"/><span class="access-key">C</span>ase-sensitive
          </label>
          <label for="regexp">
            <input type="checkbox" name="regexp" id="regexp" class="option-checkbox" value="true" accesskey="r"/><span class="access-key">R</span>egexp search
          </label>
        </div>
        <div id="path-section">
          <label for="query" class="query_label visually-hidden">Path</label>
          <input type="text" name="path" value="" maxlength="2048" id="path" accesskey="p" title="Path" placeholder="Path filter (supports globbing and ^, $)" autocomplete="off" />
          <div class="zero-size-container">
            <div class="bubble" id="path-bubble">
            </div>
          </div>
        </div>
      </div>
    </fieldset>
    <input type="submit" value="Search" class="visually-hidden" />
    <div id="revision">
      <span id="rev-id">Showing <a href="/mozilla-central/commit/01b4b3830ea3cae2e9e431019afa6391b471c6da">01b4b383</a>:</span>
      <span id="rev-desc">Backed out changeset bc69bea83b66 (bug <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1527522">1527522</a>) for wrench bustages. CLOSED TREE</span>
    </div>
  </form>
  <div id="content" class="content" data-no-results="No results for current query.">
<div class="breadcrumbs"><a href="/mozilla-central/source/">mozilla-central</a><span class="path-separator">/</span><a href="/mozilla-central/source/devtools">devtools</a><span class="path-separator">/</span><a href="/mozilla-central/source/devtools/client">client</a><span class="path-separator">/</span><a href="/mozilla-central/source/devtools/client/webaudioeditor">webaudioeditor</a><span class="path-separator">/</span><a href="/mozilla-central/source/devtools/client/webaudioeditor/test">test</a><span class="path-separator">/</span><a href="/mozilla-central/source/devtools/client/webaudioeditor/test/browser_audionode-actor-get-automation-data-01.js">browser_audionode-actor-get-automation-data-01.js</a></div>
<div class="panel">
  <button id="panel-toggle">
    <span class="navpanel-icon expanded" aria-hidden="false"></span>
    Navigation
  </button>
  <section id="panel-content" aria-expanded="true" aria-hidden="false">
  <label class="panel-accel"><input type="checkbox" id="panel-accel-enable" checked="checked">Enable keyboard shortcuts</label>
  <h4>Source code</h4>
  <ul>
  <li>
  <a href="https://bugzilla.mozilla.org/enter_bug.cgi?product=DevTools&component=Web Audio Editor" title="File a bug in DevTools :: Web Audio Editor" class="icon">File a bug in DevTools :: Web Audio Editor</a>
  </li>
  </ul>
  <h4>Revision control</h4>
  <ul>
  <li>
  <a href="/mozilla-central/rev/01b4b3830ea3cae2e9e431019afa6391b471c6da/devtools/client/webaudioeditor/test/browser_audionode-actor-get-automation-data-01.js" title="Permalink" class="icon" data-update-link="true" data-link="/mozilla-central/rev/01b4b3830ea3cae2e9e431019afa6391b471c6da/devtools/client/webaudioeditor/test/browser_audionode-actor-get-automation-data-01.js">Permalink <span class="accel">Y</span></a>
  </li>
  <li>
  <a href="https://hg.mozilla.org/mozilla-central/log/tip/devtools/client/webaudioeditor/test/browser_audionode-actor-get-automation-data-01.js" title="Log" class="icon">Log <span class="accel">L</span></a>
  </li>
  <li>
  <a href="https://hg.mozilla.org/mozilla-central/raw-file/tip/devtools/client/webaudioeditor/test/browser_audionode-actor-get-automation-data-01.js" title="Raw" class="icon">Raw <span class="accel">R</span></a>
  </li>
  <li>
  <a href="javascript:alert('Hover over the gray bar on the left to see blame information.')" title="Blame" class="icon">Blame</a>
  </li>
  </ul>
  </section>
</div>
<table id="file" class="file">
  <thead class="visually-hidden">
    <th scope="col">Line</th>
    <th scope="col">Code</th>
  </thead>
  <tbody>
    <tr>
      <td id="line-numbers">
<span id="l1" class="line-number">1
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#browser/devtools/webaudioeditor/test/browser_audionode-actor-get-automation-data-01.js#1" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l2" class="line-number">2
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#browser/devtools/webaudioeditor/test/browser_audionode-actor-get-automation-data-01.js#2" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l3" class="line-number">3
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#browser/devtools/webaudioeditor/test/browser_audionode-actor-get-automation-data-01.js#3" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l4" class="line-number">4
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#browser/devtools/webaudioeditor/test/browser_audionode-actor-get-automation-data-01.js#4" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l5" class="line-number">5
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#browser/devtools/webaudioeditor/test/browser_audionode-actor-get-automation-data-01.js#5" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l6" class="line-number">6
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#browser/devtools/webaudioeditor/test/browser_audionode-actor-get-automation-data-01.js#6" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l7" class="line-number">7
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#browser/devtools/webaudioeditor/test/browser_audionode-actor-get-automation-data-01.js#7" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l8" class="line-number">8
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#browser/devtools/webaudioeditor/test/browser_audionode-actor-get-automation-data-01.js#8" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l9" class="line-number">9
<div class="blame-strip c2" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#9" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l10" class="line-number">10
<div class="blame-strip c1" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#10" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l11" class="line-number">11
<div class="blame-strip c1" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#11" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l12" class="line-number">12
<div class="blame-strip c2" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#browser/devtools/webaudioeditor/test/browser_audionode-actor-get-automation-data-01.js#12" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l13" class="line-number">13
<div class="blame-strip c1" data-blame="ceaeb9355094af9bb68cce56902cf39086795fe0#%#13" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l14" class="line-number">14
<div class="blame-strip c2" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#browser/devtools/webaudioeditor/test/browser_audionode-actor-get-automation-data-01.js#14" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l15" class="line-number">15
<div class="blame-strip c2" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#browser/devtools/webaudioeditor/test/browser_audionode-actor-get-automation-data-01.js#15" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l16" class="line-number">16
<div class="blame-strip c1" data-blame="7fdc2c153f2ff825947046b7a5d8e82cb3319610#%#16" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l17" class="line-number">17
<div class="blame-strip c2" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#17" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l18" class="line-number">18
<div class="blame-strip c1" data-blame="bcf6facc3c1d9edf3de911b652ad9a36a3c0a41d#%#18" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l19" class="line-number">19
<div class="blame-strip c1" data-blame="bcf6facc3c1d9edf3de911b652ad9a36a3c0a41d#%#19" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l20" class="line-number">20
<div class="blame-strip c1" data-blame="bcf6facc3c1d9edf3de911b652ad9a36a3c0a41d#%#20" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l21" class="line-number">21
<div class="blame-strip c1" data-blame="bcf6facc3c1d9edf3de911b652ad9a36a3c0a41d#%#21" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l22" class="line-number">22
<div class="blame-strip c1" data-blame="bcf6facc3c1d9edf3de911b652ad9a36a3c0a41d#%#22" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l23" class="line-number">23
<div class="blame-strip c1" data-blame="bcf6facc3c1d9edf3de911b652ad9a36a3c0a41d#%#23" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l24" class="line-number">24
<div class="blame-strip c1" data-blame="bcf6facc3c1d9edf3de911b652ad9a36a3c0a41d#%#24" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l25" class="line-number">25
<div class="blame-strip c2" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#browser/devtools/webaudioeditor/test/browser_audionode-actor-get-automation-data-01.js#25" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l26" class="line-number">26
<div class="blame-strip c2" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#browser/devtools/webaudioeditor/test/browser_audionode-actor-get-automation-data-01.js#26" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l27" class="line-number">27
<div class="blame-strip c1" data-blame="bcf6facc3c1d9edf3de911b652ad9a36a3c0a41d#%#27" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l28" class="line-number">28
<div class="blame-strip c2" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#browser/devtools/webaudioeditor/test/browser_audionode-actor-get-automation-data-01.js#28" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l29" class="line-number">29
<div class="blame-strip c1" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#29" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l30" class="line-number">30
<div class="blame-strip c2" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#browser/devtools/webaudioeditor/test/browser_audionode-actor-get-automation-data-01.js#30" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l31" class="line-number">31
<div class="blame-strip c2" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#browser/devtools/webaudioeditor/test/browser_audionode-actor-get-automation-data-01.js#31" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l32" class="line-number">32
<div class="blame-strip c2" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#browser/devtools/webaudioeditor/test/browser_audionode-actor-get-automation-data-01.js#32" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l33" class="line-number">33
<div class="blame-strip c2" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#browser/devtools/webaudioeditor/test/browser_audionode-actor-get-automation-data-01.js#33" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l34" class="line-number">34
<div class="blame-strip c2" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#browser/devtools/webaudioeditor/test/browser_audionode-actor-get-automation-data-01.js#34" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l35" class="line-number">35
<div class="blame-strip c2" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#browser/devtools/webaudioeditor/test/browser_audionode-actor-get-automation-data-01.js#35" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l36" class="line-number">36
<div class="blame-strip c2" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#browser/devtools/webaudioeditor/test/browser_audionode-actor-get-automation-data-01.js#36" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l37" class="line-number">37
<div class="blame-strip c2" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#browser/devtools/webaudioeditor/test/browser_audionode-actor-get-automation-data-01.js#37" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l38" class="line-number">38
<div class="blame-strip c2" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#browser/devtools/webaudioeditor/test/browser_audionode-actor-get-automation-data-01.js#38" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l39" class="line-number">39
<div class="blame-strip c2" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#browser/devtools/webaudioeditor/test/browser_audionode-actor-get-automation-data-01.js#39" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l40" class="line-number">40
<div class="blame-strip c2" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#browser/devtools/webaudioeditor/test/browser_audionode-actor-get-automation-data-01.js#40" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l41" class="line-number">41
<div class="blame-strip c2" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#browser/devtools/webaudioeditor/test/browser_audionode-actor-get-automation-data-01.js#41" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l42" class="line-number">42
<div class="blame-strip c1" data-blame="30b2b7ce44c7bebc55a05d761f2e3e6d6d45d86e#%#42" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l43" class="line-number">43
<div class="blame-strip c1" data-blame="30b2b7ce44c7bebc55a05d761f2e3e6d6d45d86e#%#43" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l44" class="line-number">44
<div class="blame-strip c1" data-blame="30b2b7ce44c7bebc55a05d761f2e3e6d6d45d86e#%#44" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l45" class="line-number">45
<div class="blame-strip c2" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#browser/devtools/webaudioeditor/test/browser_audionode-actor-get-automation-data-01.js#45" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l46" class="line-number">46
<div class="blame-strip c1" data-blame="30b2b7ce44c7bebc55a05d761f2e3e6d6d45d86e#%#46" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l47" class="line-number">47
<div class="blame-strip c2" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#browser/devtools/webaudioeditor/test/browser_audionode-actor-get-automation-data-01.js#47" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l48" class="line-number">48
<div class="blame-strip c2" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#browser/devtools/webaudioeditor/test/browser_audionode-actor-get-automation-data-01.js#48" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l49" class="line-number">49
<div class="blame-strip c2" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#browser/devtools/webaudioeditor/test/browser_audionode-actor-get-automation-data-01.js#49" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l50" class="line-number">50
<div class="blame-strip c2" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#browser/devtools/webaudioeditor/test/browser_audionode-actor-get-automation-data-01.js#50" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l51" class="line-number">51
<div class="blame-strip c2" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#browser/devtools/webaudioeditor/test/browser_audionode-actor-get-automation-data-01.js#51" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l52" class="line-number">52
<div class="blame-strip c1" data-blame="bcf6facc3c1d9edf3de911b652ad9a36a3c0a41d#%#52" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l53" class="line-number">53
<div class="blame-strip c2" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#browser/devtools/webaudioeditor/test/browser_audionode-actor-get-automation-data-01.js#53" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
      </td>
      <td class="code">
<pre><code id="line-1" aria-labelledby="1"><span class="syn_comment" >/* Any copyright is dedicated to the Public Domain.</span>
</code><code id="line-2" aria-labelledby="2"><span class="syn_comment" >   <a href="http://creativecommons.org/publicdomain/zero/1.0/">http://creativecommons.org/publicdomain/zero/1.0/</a> */</span>
</code><code id="line-3" aria-labelledby="3">
</code><code id="line-4" aria-labelledby="4"><span class="syn_comment" >/**</span>
</code><code id="line-5" aria-labelledby="5"><span class="syn_comment" > * Test AudioNode#addAutomationEvent() checking automation values, also using</span>
</code><code id="line-6" aria-labelledby="6"><span class="syn_comment" > * a curve as the last event to check duration spread.</span>
</code><code id="line-7" aria-labelledby="7"><span class="syn_comment" > */</span>
</code><code id="line-8" aria-labelledby="8">
</code><code id="line-9" aria-labelledby="9"><span data-symbols="#add_task" data-i="0" >add_task</span>(async <span class="syn_reserved" >function</span>() {
</code><code id="line-10" aria-labelledby="10">  <span class="syn_reserved" >const</span> { <span data-symbols="7333-0" >target</span>, <span data-symbols="7333-1" >front</span> } = await <span data-symbols="#initBackend" data-i="1" >initBackend</span>(<span data-symbols="#SIMPLE_CONTEXT_URL" data-i="2" >SIMPLE_CONTEXT_URL</span>);
</code><code id="line-11" aria-labelledby="11">  <span class="syn_reserved" >const</span> [<span data-symbols="7333-2" >_</span>, [<span data-symbols="7333-3" >destNode</span>, <span data-symbols="7333-4" >oscNode</span>, <span data-symbols="7333-5" >gainNode</span>]] = await <span data-symbols="#Promise" data-i="3" >Promise</span>.<span data-symbols="#all,Promise#all" data-i="4" >all</span>([
</code><code id="line-12" aria-labelledby="12">    <span data-symbols="7333-1" >front</span>.<span data-symbols="#setup,front#setup" data-i="5" >setup</span>({ <span class="syn_def" data-symbols="#reload" data-i="6" >reload</span>: <span class="syn_reserved" >true</span> }),
</code><code id="line-13" aria-labelledby="13">    <span data-symbols="#get3" data-i="7" >get3</span>(<span data-symbols="7333-1" >front</span>, <span class="syn_string" >"create-node"</span>),
</code><code id="line-14" aria-labelledby="14">  ]);
</code><code id="line-15" aria-labelledby="15">
</code><code id="line-16" aria-labelledby="16">  <span class="syn_reserved" >const</span> <span data-symbols="7333-6" >t0</span> = 0, <span data-symbols="7333-7" >t1</span> = 0.1, <span data-symbols="7333-8" >t2</span> = 0.2, <span data-symbols="7333-9" >t3</span> = 0.3, <span data-symbols="7333-10" >t4</span> = 0.4, <span data-symbols="7333-11" >t5</span> = 0.6, <span data-symbols="7333-12" >t6</span> = 0.7, <span data-symbols="7333-13" >t7</span> = 1;
</code><code id="line-17" aria-labelledby="17">  <span class="syn_reserved" >const</span> <span data-symbols="7333-14" >curve</span> = [-1, 0, 1];
</code><code id="line-18" aria-labelledby="18">  await <span data-symbols="7333-4" >oscNode</span>.<span data-symbols="#addAutomationEvent,oscNode#addAutomationEvent" data-i="8" >addAutomationEvent</span>(<span class="syn_string" >"frequency"</span>, <span class="syn_string" >"setValueAtTime"</span>, [0.2, <span data-symbols="7333-6" >t0</span>]);
</code><code id="line-19" aria-labelledby="19">  await <span data-symbols="7333-4" >oscNode</span>.<span data-symbols="#addAutomationEvent,oscNode#addAutomationEvent" data-i="9" >addAutomationEvent</span>(<span class="syn_string" >"frequency"</span>, <span class="syn_string" >"setValueAtTime"</span>, [0.3, <span data-symbols="7333-7" >t1</span>]);
</code><code id="line-20" aria-labelledby="20">  await <span data-symbols="7333-4" >oscNode</span>.<span data-symbols="#addAutomationEvent,oscNode#addAutomationEvent" data-i="10" >addAutomationEvent</span>(<span class="syn_string" >"frequency"</span>, <span class="syn_string" >"setValueAtTime"</span>, [0.4, <span data-symbols="7333-8" >t2</span>]);
</code><code id="line-21" aria-labelledby="21">  await <span data-symbols="7333-4" >oscNode</span>.<span data-symbols="#addAutomationEvent,oscNode#addAutomationEvent" data-i="11" >addAutomationEvent</span>(<span class="syn_string" >"frequency"</span>, <span class="syn_string" >"linearRampToValueAtTime"</span>, [1, <span data-symbols="7333-9" >t3</span>]);
</code><code id="line-22" aria-labelledby="22">  await <span data-symbols="7333-4" >oscNode</span>.<span data-symbols="#addAutomationEvent,oscNode#addAutomationEvent" data-i="12" >addAutomationEvent</span>(<span class="syn_string" >"frequency"</span>, <span class="syn_string" >"linearRampToValueAtTime"</span>, [0.15, <span data-symbols="7333-10" >t4</span>]);
</code><code id="line-23" aria-labelledby="23">  await <span data-symbols="7333-4" >oscNode</span>.<span data-symbols="#addAutomationEvent,oscNode#addAutomationEvent" data-i="13" >addAutomationEvent</span>(<span class="syn_string" >"frequency"</span>, <span class="syn_string" >"exponentialRampToValueAtTime"</span>, [0.75, <span data-symbols="7333-11" >t5</span>]);
</code><code id="line-24" aria-labelledby="24">  await <span data-symbols="7333-4" >oscNode</span>.<span data-symbols="#addAutomationEvent,oscNode#addAutomationEvent" data-i="14" >addAutomationEvent</span>(<span class="syn_string" >"frequency"</span>, <span class="syn_string" >"exponentialRampToValueAtTime"</span>, [0.05, <span data-symbols="7333-12" >t6</span>]);
</code><code id="line-25" aria-labelledby="25">  <span class="syn_comment" >// End with a curve here so we can get proper results on the last event (which takes into account</span>
</code><code id="line-26" aria-labelledby="26">  <span class="syn_comment" >// duration)</span>
</code><code id="line-27" aria-labelledby="27">  await <span data-symbols="7333-4" >oscNode</span>.<span data-symbols="#addAutomationEvent,oscNode#addAutomationEvent" data-i="15" >addAutomationEvent</span>(<span class="syn_string" >"frequency"</span>, <span class="syn_string" >"setValueCurveAtTime"</span>, [<span data-symbols="7333-14" >curve</span>, <span data-symbols="7333-12" >t6</span>, <span data-symbols="7333-13" >t7</span> - <span data-symbols="7333-12" >t6</span>]);
</code><code id="line-28" aria-labelledby="28">
</code><code id="line-29" aria-labelledby="29">  <span class="syn_reserved" >const</span> { <span data-symbols="7333-15" >events</span>, <span data-symbols="7333-16" >values</span> } = await <span data-symbols="7333-4" >oscNode</span>.<span data-symbols="#getAutomationData,oscNode#getAutomationData" data-i="16" >getAutomationData</span>(<span class="syn_string" >"frequency"</span>);
</code><code id="line-30" aria-labelledby="30">
</code><code id="line-31" aria-labelledby="31">  <span data-symbols="#is" data-i="17" >is</span>(<span data-symbols="7333-15" >events</span>.<span data-symbols="#length,events#length" data-i="18" >length</span>, 8, <span class="syn_string" >"8 recorded events returned."</span>);
</code><code id="line-32" aria-labelledby="32">  <span data-symbols="#is" data-i="19" >is</span>(<span data-symbols="7333-16" >values</span>.<span data-symbols="#length,values#length" data-i="20" >length</span>, 2000, <span class="syn_string" >"2000 value points returned."</span>);
</code><code id="line-33" aria-labelledby="33">
</code><code id="line-34" aria-labelledby="34">  <span data-symbols="#checkAutomationValue" data-i="21" >checkAutomationValue</span>(<span data-symbols="7333-16" >values</span>, 0.05, 0.2);
</code><code id="line-35" aria-labelledby="35">  <span data-symbols="#checkAutomationValue" data-i="22" >checkAutomationValue</span>(<span data-symbols="7333-16" >values</span>, 0.1, 0.3);
</code><code id="line-36" aria-labelledby="36">  <span data-symbols="#checkAutomationValue" data-i="23" >checkAutomationValue</span>(<span data-symbols="7333-16" >values</span>, 0.15, 0.3);
</code><code id="line-37" aria-labelledby="37">  <span data-symbols="#checkAutomationValue" data-i="24" >checkAutomationValue</span>(<span data-symbols="7333-16" >values</span>, 0.2, 0.4);
</code><code id="line-38" aria-labelledby="38">  <span data-symbols="#checkAutomationValue" data-i="25" >checkAutomationValue</span>(<span data-symbols="7333-16" >values</span>, 0.25, 0.7);
</code><code id="line-39" aria-labelledby="39">  <span data-symbols="#checkAutomationValue" data-i="26" >checkAutomationValue</span>(<span data-symbols="7333-16" >values</span>, 0.3, 1);
</code><code id="line-40" aria-labelledby="40">  <span data-symbols="#checkAutomationValue" data-i="27" >checkAutomationValue</span>(<span data-symbols="7333-16" >values</span>, 0.35, 0.575);
</code><code id="line-41" aria-labelledby="41">  <span data-symbols="#checkAutomationValue" data-i="28" >checkAutomationValue</span>(<span data-symbols="7333-16" >values</span>, 0.4, 0.15);
</code><code id="line-42" aria-labelledby="42">  <span data-symbols="#checkAutomationValue" data-i="29" >checkAutomationValue</span>(<span data-symbols="7333-16" >values</span>, 0.45, 0.15 * <span data-symbols="#Math" data-i="30" >Math</span>.<span data-symbols="#pow,Math#pow" data-i="31" >pow</span>(0.75 / 0.15, 0.05 / 0.2));
</code><code id="line-43" aria-labelledby="43">  <span data-symbols="#checkAutomationValue" data-i="32" >checkAutomationValue</span>(<span data-symbols="7333-16" >values</span>, 0.5, 0.15 * <span data-symbols="#Math" data-i="33" >Math</span>.<span data-symbols="#pow,Math#pow" data-i="34" >pow</span>(0.75 / 0.15, 0.5));
</code><code id="line-44" aria-labelledby="44">  <span data-symbols="#checkAutomationValue" data-i="35" >checkAutomationValue</span>(<span data-symbols="7333-16" >values</span>, 0.55, 0.15 * <span data-symbols="#Math" data-i="36" >Math</span>.<span data-symbols="#pow,Math#pow" data-i="37" >pow</span>(0.75 / 0.15, 0.15 / 0.2));
</code><code id="line-45" aria-labelledby="45">  <span data-symbols="#checkAutomationValue" data-i="38" >checkAutomationValue</span>(<span data-symbols="7333-16" >values</span>, 0.6, 0.75);
</code><code id="line-46" aria-labelledby="46">  <span data-symbols="#checkAutomationValue" data-i="39" >checkAutomationValue</span>(<span data-symbols="7333-16" >values</span>, 0.65, 0.75 * <span data-symbols="#Math" data-i="40" >Math</span>.<span data-symbols="#pow,Math#pow" data-i="41" >pow</span>(0.05 / 0.75, 0.5));
</code><code id="line-47" aria-labelledby="47">  <span data-symbols="#checkAutomationValue" data-i="42" >checkAutomationValue</span>(<span data-symbols="7333-16" >values</span>, 0.705, -1); <span class="syn_comment" >// Increase this time a bit to prevent off by the previous exponential amount</span>
</code><code id="line-48" aria-labelledby="48">  <span data-symbols="#checkAutomationValue" data-i="43" >checkAutomationValue</span>(<span data-symbols="7333-16" >values</span>, 0.8, 0);
</code><code id="line-49" aria-labelledby="49">  <span data-symbols="#checkAutomationValue" data-i="44" >checkAutomationValue</span>(<span data-symbols="7333-16" >values</span>, 0.9, 1);
</code><code id="line-50" aria-labelledby="50">  <span data-symbols="#checkAutomationValue" data-i="45" >checkAutomationValue</span>(<span data-symbols="7333-16" >values</span>, 1, 1);
</code><code id="line-51" aria-labelledby="51">
</code><code id="line-52" aria-labelledby="52">  await <span data-symbols="#removeTab" data-i="46" >removeTab</span>(<span data-symbols="7333-0" >target</span>.<span data-symbols="#tab,target#tab" data-i="47" >tab</span>);
</code><code id="line-53" aria-labelledby="53">});
</code></pre>      </td>
    </tr>
  </tbody>
</table>
<script>var ANALYSIS_DATA = [[[],[{"pretty":"property add_task","sym":"#add_task"}]],[[],[{"pretty":"property initBackend","sym":"#initBackend"}]],[[{"pretty":"SIMPLE_CONTEXT_URL","sym":"#SIMPLE_CONTEXT_URL"}],[{"pretty":"property SIMPLE_CONTEXT_URL","sym":"#SIMPLE_CONTEXT_URL"}]],[[],[{"pretty":"property Promise","sym":"#Promise"}]],[[],[{"pretty":"property all","sym":"#all"},{"pretty":"property Promise.all","sym":"Promise#all"}]],[[],[{"pretty":"property setup","sym":"#setup"},{"pretty":"property front.setup","sym":"front#setup"}]],[[],[{"pretty":"property reload","sym":"#reload"}]],[[{"pretty":"get3","sym":"#get3"}],[{"pretty":"property get3","sym":"#get3"}]],[[],[{"pretty":"property addAutomationEvent","sym":"#addAutomationEvent"},{"pretty":"property oscNode.addAutomationEvent","sym":"oscNode#addAutomationEvent"}]],[[],[{"pretty":"property addAutomationEvent","sym":"#addAutomationEvent"},{"pretty":"property oscNode.addAutomationEvent","sym":"oscNode#addAutomationEvent"}]],[[],[{"pretty":"property addAutomationEvent","sym":"#addAutomationEvent"},{"pretty":"property oscNode.addAutomationEvent","sym":"oscNode#addAutomationEvent"}]],[[],[{"pretty":"property addAutomationEvent","sym":"#addAutomationEvent"},{"pretty":"property oscNode.addAutomationEvent","sym":"oscNode#addAutomationEvent"}]],[[],[{"pretty":"property addAutomationEvent","sym":"#addAutomationEvent"},{"pretty":"property oscNode.addAutomationEvent","sym":"oscNode#addAutomationEvent"}]],[[],[{"pretty":"property addAutomationEvent","sym":"#addAutomationEvent"},{"pretty":"property oscNode.addAutomationEvent","sym":"oscNode#addAutomationEvent"}]],[[],[{"pretty":"property addAutomationEvent","sym":"#addAutomationEvent"},{"pretty":"property oscNode.addAutomationEvent","sym":"oscNode#addAutomationEvent"}]],[[],[{"pretty":"property addAutomationEvent","sym":"#addAutomationEvent"},{"pretty":"property oscNode.addAutomationEvent","sym":"oscNode#addAutomationEvent"}]],[[],[{"pretty":"property getAutomationData","sym":"#getAutomationData"},{"pretty":"property oscNode.getAutomationData","sym":"oscNode#getAutomationData"}]],[[],[{"pretty":"property is","sym":"#is"}]],[[],[{"pretty":"property length","sym":"#length"},{"pretty":"property events.length","sym":"events#length"}]],[[],[{"pretty":"property is","sym":"#is"}]],[[{"pretty":"values.length","sym":"values#length"}],[{"pretty":"property length","sym":"#length"},{"pretty":"property values.length","sym":"values#length"}]],[[{"pretty":"checkAutomationValue","sym":"#checkAutomationValue"}],[{"pretty":"property checkAutomationValue","sym":"#checkAutomationValue"}]],[[{"pretty":"checkAutomationValue","sym":"#checkAutomationValue"}],[{"pretty":"property checkAutomationValue","sym":"#checkAutomationValue"}]],[[{"pretty":"checkAutomationValue","sym":"#checkAutomationValue"}],[{"pretty":"property checkAutomationValue","sym":"#checkAutomationValue"}]],[[{"pretty":"checkAutomationValue","sym":"#checkAutomationValue"}],[{"pretty":"property checkAutomationValue","sym":"#checkAutomationValue"}]],[[{"pretty":"checkAutomationValue","sym":"#checkAutomationValue"}],[{"pretty":"property checkAutomationValue","sym":"#checkAutomationValue"}]],[[{"pretty":"checkAutomationValue","sym":"#checkAutomationValue"}],[{"pretty":"property checkAutomationValue","sym":"#checkAutomationValue"}]],[[{"pretty":"checkAutomationValue","sym":"#checkAutomationValue"}],[{"pretty":"property checkAutomationValue","sym":"#checkAutomationValue"}]],[[{"pretty":"checkAutomationValue","sym":"#checkAutomationValue"}],[{"pretty":"property checkAutomationValue","sym":"#checkAutomationValue"}]],[[{"pretty":"checkAutomationValue","sym":"#checkAutomationValue"}],[{"pretty":"property checkAutomationValue","sym":"#checkAutomationValue"}]],[[],[{"pretty":"property Math","sym":"#Math"}]],[[],[{"pretty":"property pow","sym":"#pow"},{"pretty":"property Math.pow","sym":"Math#pow"}]],[[{"pretty":"checkAutomationValue","sym":"#checkAutomationValue"}],[{"pretty":"property checkAutomationValue","sym":"#checkAutomationValue"}]],[[],[{"pretty":"property Math","sym":"#Math"}]],[[],[{"pretty":"property pow","sym":"#pow"},{"pretty":"property Math.pow","sym":"Math#pow"}]],[[{"pretty":"checkAutomationValue","sym":"#checkAutomationValue"}],[{"pretty":"property checkAutomationValue","sym":"#checkAutomationValue"}]],[[],[{"pretty":"property Math","sym":"#Math"}]],[[],[{"pretty":"property pow","sym":"#pow"},{"pretty":"property Math.pow","sym":"Math#pow"}]],[[{"pretty":"checkAutomationValue","sym":"#checkAutomationValue"}],[{"pretty":"property checkAutomationValue","sym":"#checkAutomationValue"}]],[[{"pretty":"checkAutomationValue","sym":"#checkAutomationValue"}],[{"pretty":"property checkAutomationValue","sym":"#checkAutomationValue"}]],[[],[{"pretty":"property Math","sym":"#Math"}]],[[],[{"pretty":"property pow","sym":"#pow"},{"pretty":"property Math.pow","sym":"Math#pow"}]],[[{"pretty":"checkAutomationValue","sym":"#checkAutomationValue"}],[{"pretty":"property checkAutomationValue","sym":"#checkAutomationValue"}]],[[{"pretty":"checkAutomationValue","sym":"#checkAutomationValue"}],[{"pretty":"property checkAutomationValue","sym":"#checkAutomationValue"}]],[[{"pretty":"checkAutomationValue","sym":"#checkAutomationValue"}],[{"pretty":"property checkAutomationValue","sym":"#checkAutomationValue"}]],[[{"pretty":"checkAutomationValue","sym":"#checkAutomationValue"}],[{"pretty":"property checkAutomationValue","sym":"#checkAutomationValue"}]],[[],[{"pretty":"property removeTab","sym":"#removeTab"}]],[[],[{"pretty":"property tab","sym":"#tab"},{"pretty":"property target.tab","sym":"target#tab"}]]];</script>
    </div>
  <div id="foot" class="footer">
    This page was generated by Searchfox <span class="pretty-date" data-datetime="Wed, 13 Feb 2019 15:28:42 +0000"></span>.
  </div>
  <span id="data" data-root="/" data-search="/mozilla-central/search" data-tree="mozilla-central" data-path="devtools/client/webaudioeditor/test/browser_audionode-actor-get-automation-data-01.js"></span>
  <script src="/static/js/libs/jquery-2.1.3.min.js"></script>
  <script src="/static/js/libs/nunjucks.min.js"></script>
  <script src="/static/js/utils.js"></script>
  <script src="/static/js/dxr.js"></script>
  <script src="/static/js/context-menu.js"></script>
  <script src="/static/js/filter.js"></script>
  <script src="/static/js/panel.js"></script>
  <script src="/static/js/code-highlighter.js"></script>
  <script src="/static/js/blame.js"></script>
  </body>
</html>
