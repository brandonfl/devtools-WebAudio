<!DOCTYPE html>
<html lang="en-US">
<head>
  <meta charset="utf-8" />
  <link href="/static/icons/search.png" rel="shortcut icon">
  <title>browser_webaudio-actor-destroy-node.js - mozsearch</title>
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
<div class="breadcrumbs"><a href="/mozilla-central/source/">mozilla-central</a><span class="path-separator">/</span><a href="/mozilla-central/source/devtools">devtools</a><span class="path-separator">/</span><a href="/mozilla-central/source/devtools/client">client</a><span class="path-separator">/</span><a href="/mozilla-central/source/devtools/client/webaudioeditor">webaudioeditor</a><span class="path-separator">/</span><a href="/mozilla-central/source/devtools/client/webaudioeditor/test">test</a><span class="path-separator">/</span><a href="/mozilla-central/source/devtools/client/webaudioeditor/test/browser_webaudio-actor-destroy-node.js">browser_webaudio-actor-destroy-node.js</a></div>
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
  <a href="/mozilla-central/rev/01b4b3830ea3cae2e9e431019afa6391b471c6da/devtools/client/webaudioeditor/test/browser_webaudio-actor-destroy-node.js" title="Permalink" class="icon" data-update-link="true" data-link="/mozilla-central/rev/01b4b3830ea3cae2e9e431019afa6391b471c6da/devtools/client/webaudioeditor/test/browser_webaudio-actor-destroy-node.js">Permalink <span class="accel">Y</span></a>
  </li>
  <li>
  <a href="https://hg.mozilla.org/mozilla-central/log/tip/devtools/client/webaudioeditor/test/browser_webaudio-actor-destroy-node.js" title="Log" class="icon">Log <span class="accel">L</span></a>
  </li>
  <li>
  <a href="https://hg.mozilla.org/mozilla-central/raw-file/tip/devtools/client/webaudioeditor/test/browser_webaudio-actor-destroy-node.js" title="Raw" class="icon">Raw <span class="accel">R</span></a>
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
<div class="blame-strip c1" data-blame="b5bd9291e9d3be8a3c2690e62f6b0b8014aeb400#browser/devtools/webaudioeditor/test/browser_webaudio-actor-destroy-node.js#1" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l2" class="line-number">2
<div class="blame-strip c1" data-blame="b5bd9291e9d3be8a3c2690e62f6b0b8014aeb400#browser/devtools/webaudioeditor/test/browser_webaudio-actor-destroy-node.js#2" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l3" class="line-number">3
<div class="blame-strip c1" data-blame="b5bd9291e9d3be8a3c2690e62f6b0b8014aeb400#browser/devtools/webaudioeditor/test/browser_webaudio-actor-destroy-node.js#3" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l4" class="line-number">4
<div class="blame-strip c1" data-blame="b5bd9291e9d3be8a3c2690e62f6b0b8014aeb400#browser/devtools/webaudioeditor/test/browser_webaudio-actor-destroy-node.js#4" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l5" class="line-number">5
<div class="blame-strip c1" data-blame="b5bd9291e9d3be8a3c2690e62f6b0b8014aeb400#browser/devtools/webaudioeditor/test/browser_webaudio-actor-destroy-node.js#5" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l6" class="line-number">6
<div class="blame-strip c1" data-blame="b5bd9291e9d3be8a3c2690e62f6b0b8014aeb400#browser/devtools/webaudioeditor/test/browser_webaudio-actor-destroy-node.js#6" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l7" class="line-number">7
<div class="blame-strip c1" data-blame="b5bd9291e9d3be8a3c2690e62f6b0b8014aeb400#browser/devtools/webaudioeditor/test/browser_webaudio-actor-destroy-node.js#7" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l8" class="line-number">8
<div class="blame-strip c2" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#8" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l9" class="line-number">9
<div class="blame-strip c1" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#9" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l10" class="line-number">10
<div class="blame-strip c2" data-blame="b5bd9291e9d3be8a3c2690e62f6b0b8014aeb400#browser/devtools/webaudioeditor/test/browser_webaudio-actor-destroy-node.js#10" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l11" class="line-number">11
<div class="blame-strip c1" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#11" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l12" class="line-number">12
<div class="blame-strip c2" data-blame="b5bd9291e9d3be8a3c2690e62f6b0b8014aeb400#browser/devtools/webaudioeditor/test/browser_webaudio-actor-destroy-node.js#13" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l13" class="line-number">13
<div class="blame-strip c2" data-blame="b5bd9291e9d3be8a3c2690e62f6b0b8014aeb400#browser/devtools/webaudioeditor/test/browser_webaudio-actor-destroy-node.js#14" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l14" class="line-number">14
<div class="blame-strip c1" data-blame="d774944355d48bdea2c052bd167fcc33a2476640#%#14" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l15" class="line-number">15
<div class="blame-strip c1" data-blame="d774944355d48bdea2c052bd167fcc33a2476640#%#15" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l16" class="line-number">16
<div class="blame-strip c2" data-blame="ceaeb9355094af9bb68cce56902cf39086795fe0#%#16" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l17" class="line-number">17
<div class="blame-strip c1" data-blame="b5bd9291e9d3be8a3c2690e62f6b0b8014aeb400#browser/devtools/webaudioeditor/test/browser_webaudio-actor-destroy-node.js#17" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l18" class="line-number">18
<div class="blame-strip c1" data-blame="b5bd9291e9d3be8a3c2690e62f6b0b8014aeb400#browser/devtools/webaudioeditor/test/browser_webaudio-actor-destroy-node.js#18" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l19" class="line-number">19
<div class="blame-strip c2" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#19" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l20" class="line-number">20
<div class="blame-strip c1" data-blame="8e1d78848bb2f3df7058d532a2940c53b81bce56#%#22" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l21" class="line-number">21
<div class="blame-strip c2" data-blame="b5bd9291e9d3be8a3c2690e62f6b0b8014aeb400#browser/devtools/webaudioeditor/test/browser_webaudio-actor-destroy-node.js#19" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l22" class="line-number">22
<div class="blame-strip c1" data-blame="d774944355d48bdea2c052bd167fcc33a2476640#%#22" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l23" class="line-number">23
<div class="blame-strip c2" data-blame="b5bd9291e9d3be8a3c2690e62f6b0b8014aeb400#browser/devtools/webaudioeditor/test/browser_webaudio-actor-destroy-node.js#21" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l24" class="line-number">24
<div class="blame-strip c1" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#24" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l25" class="line-number">25
<div class="blame-strip c2" data-blame="b5bd9291e9d3be8a3c2690e62f6b0b8014aeb400#browser/devtools/webaudioeditor/test/browser_webaudio-actor-destroy-node.js#23" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l26" class="line-number">26
<div class="blame-strip c1" data-blame="866d2a1dfc1dc74572407562da916379cc6ef092#browser/devtools/webaudioeditor/test/browser_webaudio-actor-destroy-node.js#24" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l27" class="line-number">27
<div class="blame-strip c2" data-blame="5cfc7040744df45698f5473ee1645122cfa65ce8#%#27" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l28" class="line-number">28
<div class="blame-strip c1" data-blame="b5bd9291e9d3be8a3c2690e62f6b0b8014aeb400#browser/devtools/webaudioeditor/test/browser_webaudio-actor-destroy-node.js#27" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l29" class="line-number">29
<div class="blame-strip c1" data-blame="b5bd9291e9d3be8a3c2690e62f6b0b8014aeb400#browser/devtools/webaudioeditor/test/browser_webaudio-actor-destroy-node.js#28" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l30" class="line-number">30
<div class="blame-strip c1" data-blame="b5bd9291e9d3be8a3c2690e62f6b0b8014aeb400#browser/devtools/webaudioeditor/test/browser_webaudio-actor-destroy-node.js#29" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l31" class="line-number">31
<div class="blame-strip c1" data-blame="b5bd9291e9d3be8a3c2690e62f6b0b8014aeb400#browser/devtools/webaudioeditor/test/browser_webaudio-actor-destroy-node.js#30" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l32" class="line-number">32
<div class="blame-strip c2" data-blame="bcf6facc3c1d9edf3de911b652ad9a36a3c0a41d#%#32" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l33" class="line-number">33
<div class="blame-strip c1" data-blame="3c0bacbcdc816623a9982b930c0638c78ab4a2c5#browser/devtools/webaudioeditor/test/browser_webaudio-actor-destroy-node.js#32" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l34" class="line-number">34
<div class="blame-strip c2" data-blame="b5bd9291e9d3be8a3c2690e62f6b0b8014aeb400#browser/devtools/webaudioeditor/test/browser_webaudio-actor-destroy-node.js#34" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l35" class="line-number">35
<div class="blame-strip c1" data-blame="30b2b7ce44c7bebc55a05d761f2e3e6d6d45d86e#%#33" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l36" class="line-number">36
<div class="blame-strip c2" data-blame="b5bd9291e9d3be8a3c2690e62f6b0b8014aeb400#browser/devtools/webaudioeditor/test/browser_webaudio-actor-destroy-node.js#36" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l37" class="line-number">37
<div class="blame-strip c1" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#37" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l38" class="line-number">38
<div class="blame-strip c2" data-blame="b5bd9291e9d3be8a3c2690e62f6b0b8014aeb400#browser/devtools/webaudioeditor/test/browser_webaudio-actor-destroy-node.js#38" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l39" class="line-number">39
<div class="blame-strip c1" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#39" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l40" class="line-number">40
<div class="blame-strip c2" data-blame="b5bd9291e9d3be8a3c2690e62f6b0b8014aeb400#browser/devtools/webaudioeditor/test/browser_webaudio-actor-destroy-node.js#39" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l41" class="line-number">41
<div class="blame-strip c2" data-blame="b5bd9291e9d3be8a3c2690e62f6b0b8014aeb400#browser/devtools/webaudioeditor/test/browser_webaudio-actor-destroy-node.js#40" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l42" class="line-number">42
<div class="blame-strip c2" data-blame="b5bd9291e9d3be8a3c2690e62f6b0b8014aeb400#browser/devtools/webaudioeditor/test/browser_webaudio-actor-destroy-node.js#41" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
      </td>
      <td class="code">
<pre><code id="line-1" aria-labelledby="1"><span class="syn_comment" >/* Any copyright is dedicated to the Public Domain.</span>
</code><code id="line-2" aria-labelledby="2"><span class="syn_comment" >   <a href="http://creativecommons.org/publicdomain/zero/1.0/">http://creativecommons.org/publicdomain/zero/1.0/</a> */</span>
</code><code id="line-3" aria-labelledby="3">
</code><code id="line-4" aria-labelledby="4"><span class="syn_comment" >/**</span>
</code><code id="line-5" aria-labelledby="5"><span class="syn_comment" > * Test `destroy-node` event on WebAudioActor.</span>
</code><code id="line-6" aria-labelledby="6"><span class="syn_comment" > */</span>
</code><code id="line-7" aria-labelledby="7">
</code><code id="line-8" aria-labelledby="8"><span data-symbols="#add_task" data-i="0" >add_task</span>(async <span class="syn_reserved" >function</span>() {
</code><code id="line-9" aria-labelledby="9">  <span class="syn_reserved" >const</span> { <span data-symbols="7376-0" >target</span>, <span data-symbols="7376-1" >front</span> } = await <span data-symbols="#initBackend" data-i="1" >initBackend</span>(<span data-symbols="#DESTROY_NODES_URL" data-i="2" >DESTROY_NODES_URL</span>);
</code><code id="line-10" aria-labelledby="10">
</code><code id="line-11" aria-labelledby="11">  <span class="syn_reserved" >const</span> [, , <span data-symbols="7376-2" >created</span>] = await <span data-symbols="#Promise" data-i="3" >Promise</span>.<span data-symbols="#all,Promise#all" data-i="4" >all</span>([
</code><code id="line-12" aria-labelledby="12">    <span data-symbols="7376-1" >front</span>.<span data-symbols="#setup,front#setup" data-i="5" >setup</span>({ <span class="syn_def" data-symbols="#reload" data-i="6" >reload</span>: <span class="syn_reserved" >true</span> }),
</code><code id="line-13" aria-labelledby="13">    <span data-symbols="#once" data-i="7" >once</span>(<span data-symbols="7376-1" >front</span>, <span class="syn_string" >"start-context"</span>),
</code><code id="line-14" aria-labelledby="14">    <span class="syn_comment" >// Should create dest, gain, and oscillator node and 10</span>
</code><code id="line-15" aria-labelledby="15">    <span class="syn_comment" >// disposable buffer nodes</span>
</code><code id="line-16" aria-labelledby="16">    <span data-symbols="#getN" data-i="8" >getN</span>(<span data-symbols="7376-1" >front</span>, <span class="syn_string" >"create-node"</span>, 13),
</code><code id="line-17" aria-labelledby="17">  ]);
</code><code id="line-18" aria-labelledby="18">
</code><code id="line-19" aria-labelledby="19">  <span class="syn_reserved" >const</span> <span data-symbols="7376-3" >waitUntilDestroyed</span> = <span data-symbols="#getN" data-i="9" >getN</span>(<span data-symbols="7376-1" >front</span>, <span class="syn_string" >"destroy-node"</span>, 10);
</code><code id="line-20" aria-labelledby="20">
</code><code id="line-21" aria-labelledby="21">  <span class="syn_comment" >// Force CC so we can ensure it's run to clear out dead AudioNodes</span>
</code><code id="line-22" aria-labelledby="22">  <span data-symbols="#forceNodeCollection" data-i="10" >forceNodeCollection</span>();
</code><code id="line-23" aria-labelledby="23">
</code><code id="line-24" aria-labelledby="24">  <span class="syn_reserved" >const</span> <span data-symbols="7376-4" >destroyed</span> = await <span data-symbols="7376-3" >waitUntilDestroyed</span>;
</code><code id="line-25" aria-labelledby="25">
</code><code id="line-26" aria-labelledby="26">  <span data-symbols="7376-4" >destroyed</span>.<span data-symbols="#forEach,destroyed#forEach" data-i="11" >forEach</span>((<span data-symbols="7376-5" >node</span>, <span data-symbols="7376-6" >i</span>) => {
</code><code id="line-27" aria-labelledby="27">    <span data-symbols="#is" data-i="12" >is</span>(<span data-symbols="7376-5" >node</span>.<span data-symbols="#type,node#type" data-i="13" >type</span>, <span class="syn_string" >"AudioBufferSourceNode"</span>, <span class="syn_string" >"Only buffer nodes are destroyed"</span>);
</code><code id="line-28" aria-labelledby="28">    <span data-symbols="#ok" data-i="14" >ok</span>(<span data-symbols="#actorIsInList" data-i="15" >actorIsInList</span>(<span data-symbols="7376-2" >created</span>, <span data-symbols="7376-4" >destroyed</span>[<span data-symbols="7376-6" >i</span>]),
</code><code id="line-29" aria-labelledby="29">      <span class="syn_string" >"`destroy-node` called only on AudioNodes in current document."</span>);
</code><code id="line-30" aria-labelledby="30">  });
</code><code id="line-31" aria-labelledby="31">
</code><code id="line-32" aria-labelledby="32">  await <span data-symbols="#removeTab" data-i="16" >removeTab</span>(<span data-symbols="7376-0" >target</span>.<span data-symbols="#tab,target#tab" data-i="17" >tab</span>);
</code><code id="line-33" aria-labelledby="33">});
</code><code id="line-34" aria-labelledby="34">
</code><code id="line-35" aria-labelledby="35"><span class="syn_reserved" >function</span> <span class="syn_def" data-symbols="#actorIsInList" data-i="18" >actorIsInList</span>(<span data-symbols="7376-7" >list</span>, <span data-symbols="7376-8" >actor</span>) {
</code><code id="line-36" aria-labelledby="36">  <span class="syn_reserved" >for</span> (<span class="syn_reserved" >let</span> <span data-symbols="7376-9" >i</span> = 0; <span data-symbols="7376-9" >i</span> &lt; <span data-symbols="7376-7" >list</span>.<span data-symbols="#length,list#length" data-i="19" >length</span>; <span data-symbols="7376-9" >i</span>++) {
</code><code id="line-37" aria-labelledby="37">    <span class="syn_reserved" >if</span> (<span data-symbols="7376-7" >list</span>[<span data-symbols="7376-9" >i</span>].<span data-symbols="#actorID" data-i="20" >actorID</span> === <span data-symbols="7376-8" >actor</span>.<span data-symbols="#actorID,actor#actorID" data-i="21" >actorID</span>) {
</code><code id="line-38" aria-labelledby="38">      <span class="syn_reserved" >return</span> <span data-symbols="7376-7" >list</span>[<span data-symbols="7376-9" >i</span>];
</code><code id="line-39" aria-labelledby="39">    }
</code><code id="line-40" aria-labelledby="40">  }
</code><code id="line-41" aria-labelledby="41">  <span class="syn_reserved" >return</span> <span class="syn_reserved" >null</span>;
</code><code id="line-42" aria-labelledby="42">}
</code></pre>      </td>
    </tr>
  </tbody>
</table>
<script>var ANALYSIS_DATA = [[[],[{"pretty":"property add_task","sym":"#add_task"}]],[[],[{"pretty":"property initBackend","sym":"#initBackend"}]],[[{"pretty":"DESTROY_NODES_URL","sym":"#DESTROY_NODES_URL"}],[{"pretty":"property DESTROY_NODES_URL","sym":"#DESTROY_NODES_URL"}]],[[],[{"pretty":"property Promise","sym":"#Promise"}]],[[],[{"pretty":"property all","sym":"#all"},{"pretty":"property Promise.all","sym":"Promise#all"}]],[[],[{"pretty":"property setup","sym":"#setup"},{"pretty":"property front.setup","sym":"front#setup"}]],[[],[{"pretty":"property reload","sym":"#reload"}]],[[],[{"pretty":"property once","sym":"#once"}]],[[{"pretty":"getN","sym":"#getN"}],[{"pretty":"property getN","sym":"#getN"}]],[[{"pretty":"getN","sym":"#getN"}],[{"pretty":"property getN","sym":"#getN"}]],[[{"pretty":"forceNodeCollection","sym":"#forceNodeCollection"}],[{"pretty":"property forceNodeCollection","sym":"#forceNodeCollection"}]],[[],[{"pretty":"property forEach","sym":"#forEach"},{"pretty":"property destroyed.forEach","sym":"destroyed#forEach"}]],[[],[{"pretty":"property is","sym":"#is"}]],[[],[{"pretty":"property type","sym":"#type"},{"pretty":"property node.type","sym":"node#type"}]],[[],[{"pretty":"property ok","sym":"#ok"}]],[[{"pretty":"actorIsInList","sym":"#actorIsInList"}],[{"pretty":"property actorIsInList","sym":"#actorIsInList"}]],[[],[{"pretty":"property removeTab","sym":"#removeTab"}]],[[],[{"pretty":"property tab","sym":"#tab"},{"pretty":"property target.tab","sym":"target#tab"}]],[[],[{"pretty":"property actorIsInList","sym":"#actorIsInList"}]],[[],[{"pretty":"property length","sym":"#length"},{"pretty":"property list.length","sym":"list#length"}]],[[],[{"pretty":"property actorID","sym":"#actorID"}]],[[],[{"pretty":"property actorID","sym":"#actorID"},{"pretty":"property actor.actorID","sym":"actor#actorID"}]]];</script>
    </div>
  <div id="foot" class="footer">
    This page was generated by Searchfox <span class="pretty-date" data-datetime="Wed, 13 Feb 2019 15:28:42 +0000"></span>.
  </div>
  <span id="data" data-root="/" data-search="/mozilla-central/search" data-tree="mozilla-central" data-path="devtools/client/webaudioeditor/test/browser_webaudio-actor-destroy-node.js"></span>
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
