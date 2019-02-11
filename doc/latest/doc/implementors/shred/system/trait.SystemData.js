(function() {var implementors = {};
implementors["amethyst_assets"] = [{text:"impl&lt;'a, A&gt; SystemData&lt;'a&gt; for <a class=\"struct\" href=\"amethyst_assets/struct.AssetLoaderSystemData.html\" title=\"struct amethyst_assets::AssetLoaderSystemData\">AssetLoaderSystemData</a>&lt;'a, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"amethyst_assets/trait.Asset.html\" title=\"trait amethyst_assets::Asset\">Asset</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;ReadExpect&lt;'a, <a class=\"struct\" href=\"amethyst_assets/struct.Loader.html\" title=\"struct amethyst_assets::Loader\">Loader</a>&gt;: SystemData&lt;'a&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;Read&lt;'a, <a class=\"struct\" href=\"amethyst_assets/struct.AssetStorage.html\" title=\"struct amethyst_assets::AssetStorage\">AssetStorage</a>&lt;A&gt;&gt;: SystemData&lt;'a&gt;,&nbsp;</span>",synthetic:false,types:["amethyst_assets::helper::AssetLoaderSystemData"]},{text:"impl&lt;'a, T&gt; SystemData&lt;'a&gt; for <a class=\"struct\" href=\"amethyst_assets/struct.PrefabLoader.html\" title=\"struct amethyst_assets::PrefabLoader\">PrefabLoader</a>&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;ReadExpect&lt;'a, <a class=\"struct\" href=\"amethyst_assets/struct.Loader.html\" title=\"struct amethyst_assets::Loader\">Loader</a>&gt;: SystemData&lt;'a&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;Read&lt;'a, <a class=\"struct\" href=\"amethyst_assets/struct.AssetStorage.html\" title=\"struct amethyst_assets::AssetStorage\">AssetStorage</a>&lt;<a class=\"struct\" href=\"amethyst_assets/struct.Prefab.html\" title=\"struct amethyst_assets::Prefab\">Prefab</a>&lt;T&gt;&gt;&gt;: SystemData&lt;'a&gt;,&nbsp;</span>",synthetic:false,types:["amethyst_assets::prefab::PrefabLoader"]},];
implementors["amethyst_renderer"] = [{text:"impl&lt;'a&gt; SystemData&lt;'a&gt; for <a class=\"struct\" href=\"amethyst_renderer/struct.ShapeUpload.html\" title=\"struct amethyst_renderer::ShapeUpload\">ShapeUpload</a>&lt;'a&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;ReadExpect&lt;'a, <a class=\"struct\" href=\"amethyst_assets/loader/struct.Loader.html\" title=\"struct amethyst_assets::loader::Loader\">Loader</a>&gt;: SystemData&lt;'a&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;Read&lt;'a, <a class=\"struct\" href=\"amethyst_assets/storage/struct.AssetStorage.html\" title=\"struct amethyst_assets::storage::AssetStorage\">AssetStorage</a>&lt;<a class=\"struct\" href=\"amethyst_renderer/struct.Mesh.html\" title=\"struct amethyst_renderer::Mesh\">Mesh</a>&gt;&gt;: SystemData&lt;'a&gt;,&nbsp;</span>",synthetic:false,types:["amethyst_renderer::shape::ShapeUpload"]},];
implementors["amethyst_ui"] = [{text:"impl&lt;'a&gt; SystemData&lt;'a&gt; for <a class=\"struct\" href=\"amethyst_ui/struct.UiButtonBuilderResources.html\" title=\"struct amethyst_ui::UiButtonBuilderResources\">UiButtonBuilderResources</a>&lt;'a&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Read&lt;'a, <a class=\"struct\" href=\"amethyst_assets/storage/struct.AssetStorage.html\" title=\"struct amethyst_assets::storage::AssetStorage\">AssetStorage</a>&lt;<a class=\"struct\" href=\"amethyst_ui/struct.FontAsset.html\" title=\"struct amethyst_ui::FontAsset\">FontAsset</a>&gt;&gt;: SystemData&lt;'a&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;Read&lt;'a, <a class=\"struct\" href=\"amethyst_assets/storage/struct.AssetStorage.html\" title=\"struct amethyst_assets::storage::AssetStorage\">AssetStorage</a>&lt;<a class=\"struct\" href=\"amethyst_renderer/tex/struct.Texture.html\" title=\"struct amethyst_renderer::tex::Texture\">Texture</a>&gt;&gt;: SystemData&lt;'a&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;ReadExpect&lt;'a, <a class=\"struct\" href=\"amethyst_assets/loader/struct.Loader.html\" title=\"struct amethyst_assets::loader::Loader\">Loader</a>&gt;: SystemData&lt;'a&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;Entities&lt;'a&gt;: SystemData&lt;'a&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;WriteStorage&lt;'a, <a class=\"struct\" href=\"amethyst_ui/struct.UiImage.html\" title=\"struct amethyst_ui::UiImage\">UiImage</a>&gt;: SystemData&lt;'a&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;WriteStorage&lt;'a, <a class=\"struct\" href=\"amethyst_ui/struct.MouseReactive.html\" title=\"struct amethyst_ui::MouseReactive\">MouseReactive</a>&gt;: SystemData&lt;'a&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;WriteStorage&lt;'a, <a class=\"struct\" href=\"amethyst_core/transform/components/parent/struct.Parent.html\" title=\"struct amethyst_core::transform::components::parent::Parent\">Parent</a>&gt;: SystemData&lt;'a&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;WriteStorage&lt;'a, <a class=\"struct\" href=\"amethyst_ui/struct.UiText.html\" title=\"struct amethyst_ui::UiText\">UiText</a>&gt;: SystemData&lt;'a&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;WriteStorage&lt;'a, <a class=\"struct\" href=\"amethyst_ui/struct.UiTransform.html\" title=\"struct amethyst_ui::UiTransform\">UiTransform</a>&gt;: SystemData&lt;'a&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;WriteStorage&lt;'a, <a class=\"struct\" href=\"amethyst_ui/struct.UiButton.html\" title=\"struct amethyst_ui::UiButton\">UiButton</a>&gt;: SystemData&lt;'a&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;WriteStorage&lt;'a, <a class=\"struct\" href=\"amethyst_ui/struct.OnUiActionImage.html\" title=\"struct amethyst_ui::OnUiActionImage\">OnUiActionImage</a>&gt;: SystemData&lt;'a&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;WriteStorage&lt;'a, <a class=\"struct\" href=\"amethyst_ui/struct.OnUiActionSound.html\" title=\"struct amethyst_ui::OnUiActionSound\">OnUiActionSound</a>&gt;: SystemData&lt;'a&gt;,&nbsp;</span>",synthetic:false,types:["amethyst_ui::button::builder::UiButtonBuilderResources"]},{text:"impl&lt;'a, A, I, F, C&gt; SystemData&lt;'a&gt; for <a class=\"struct\" href=\"amethyst_ui/struct.UiLoader.html\" title=\"struct amethyst_ui::UiLoader\">UiLoader</a>&lt;'a, A, I, F, C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"amethyst_assets/asset/trait.Format.html\" title=\"trait amethyst_assets::asset::Format\">Format</a>&lt;<a class=\"struct\" href=\"amethyst_audio/source/struct.Source.html\" title=\"struct amethyst_audio::source::Source\">Audio</a>, Options = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;I: <a class=\"trait\" href=\"amethyst_assets/asset/trait.Format.html\" title=\"trait amethyst_assets::asset::Format\">Format</a>&lt;<a class=\"struct\" href=\"amethyst_renderer/tex/struct.Texture.html\" title=\"struct amethyst_renderer::tex::Texture\">Texture</a>, Options = <a class=\"struct\" href=\"amethyst_renderer/formats/texture/struct.TextureMetadata.html\" title=\"struct amethyst_renderer::formats::texture::TextureMetadata\">TextureMetadata</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"amethyst_assets/asset/trait.Format.html\" title=\"trait amethyst_assets::asset::Format\">Format</a>&lt;<a class=\"struct\" href=\"amethyst_ui/struct.FontAsset.html\" title=\"struct amethyst_ui::FontAsset\">FontAsset</a>, Options = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;C: <a class=\"trait\" href=\"amethyst_ui/trait.ToNativeWidget.html\" title=\"trait amethyst_ui::ToNativeWidget\">ToNativeWidget</a>&lt;A, I, F&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;ReadExpect&lt;'a, <a class=\"struct\" href=\"amethyst_assets/loader/struct.Loader.html\" title=\"struct amethyst_assets::loader::Loader\">Loader</a>&gt;: SystemData&lt;'a&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;Read&lt;'a, <a class=\"struct\" href=\"amethyst_assets/storage/struct.AssetStorage.html\" title=\"struct amethyst_assets::storage::AssetStorage\">AssetStorage</a>&lt;<a class=\"type\" href=\"amethyst_ui/type.UiPrefab.html\" title=\"type amethyst_ui::UiPrefab\">UiPrefab</a>&lt;A, I, F, C::<a class=\"type\" href=\"amethyst_ui/trait.ToNativeWidget.html#associatedtype.PrefabData\" title=\"type amethyst_ui::ToNativeWidget::PrefabData\">PrefabData</a>&gt;&gt;&gt;: SystemData&lt;'a&gt;,&nbsp;</span>",synthetic:false,types:["amethyst_ui::prefab::UiLoader"]},{text:"impl&lt;'a, A, I, F, C&gt; SystemData&lt;'a&gt; for <a class=\"struct\" href=\"amethyst_ui/struct.UiCreator.html\" title=\"struct amethyst_ui::UiCreator\">UiCreator</a>&lt;'a, A, I, F, C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"amethyst_assets/asset/trait.Format.html\" title=\"trait amethyst_assets::asset::Format\">Format</a>&lt;<a class=\"struct\" href=\"amethyst_audio/source/struct.Source.html\" title=\"struct amethyst_audio::source::Source\">Audio</a>, Options = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;I: <a class=\"trait\" href=\"amethyst_assets/asset/trait.Format.html\" title=\"trait amethyst_assets::asset::Format\">Format</a>&lt;<a class=\"struct\" href=\"amethyst_renderer/tex/struct.Texture.html\" title=\"struct amethyst_renderer::tex::Texture\">Texture</a>, Options = <a class=\"struct\" href=\"amethyst_renderer/formats/texture/struct.TextureMetadata.html\" title=\"struct amethyst_renderer::formats::texture::TextureMetadata\">TextureMetadata</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"amethyst_assets/asset/trait.Format.html\" title=\"trait amethyst_assets::asset::Format\">Format</a>&lt;<a class=\"struct\" href=\"amethyst_ui/struct.FontAsset.html\" title=\"struct amethyst_ui::FontAsset\">FontAsset</a>, Options = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;C: <a class=\"trait\" href=\"amethyst_ui/trait.ToNativeWidget.html\" title=\"trait amethyst_ui::ToNativeWidget\">ToNativeWidget</a>&lt;A, I, F&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"amethyst_ui/struct.UiLoader.html\" title=\"struct amethyst_ui::UiLoader\">UiLoader</a>&lt;'a, A, I, F, C&gt;: SystemData&lt;'a&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;Entities&lt;'a&gt;: SystemData&lt;'a&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;WriteStorage&lt;'a, <a class=\"struct\" href=\"amethyst_assets/storage/struct.Handle.html\" title=\"struct amethyst_assets::storage::Handle\">Handle</a>&lt;<a class=\"type\" href=\"amethyst_ui/type.UiPrefab.html\" title=\"type amethyst_ui::UiPrefab\">UiPrefab</a>&lt;A, I, F, C::<a class=\"type\" href=\"amethyst_ui/trait.ToNativeWidget.html#associatedtype.PrefabData\" title=\"type amethyst_ui::ToNativeWidget::PrefabData\">PrefabData</a>&gt;&gt;&gt;: SystemData&lt;'a&gt;,&nbsp;</span>",synthetic:false,types:["amethyst_ui::prefab::UiCreator"]},{text:"impl&lt;'a&gt; SystemData&lt;'a&gt; for <a class=\"struct\" href=\"amethyst_ui/struct.UiFinder.html\" title=\"struct amethyst_ui::UiFinder\">UiFinder</a>&lt;'a&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Entities&lt;'a&gt;: SystemData&lt;'a&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;ReadStorage&lt;'a, <a class=\"struct\" href=\"amethyst_ui/struct.UiTransform.html\" title=\"struct amethyst_ui::UiTransform\">UiTransform</a>&gt;: SystemData&lt;'a&gt;,&nbsp;</span>",synthetic:false,types:["amethyst_ui::transform::UiFinder"]},];
implementors["amethyst_utils"] = [{text:"impl&lt;'a, T&gt; SystemData&lt;'a&gt; for <a class=\"struct\" href=\"amethyst_utils/tag/struct.TagFinder.html\" title=\"struct amethyst_utils::tag::TagFinder\">TagFinder</a>&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;Entities&lt;'a&gt;: SystemData&lt;'a&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;ReadStorage&lt;'a, <a class=\"struct\" href=\"amethyst_utils/tag/struct.Tag.html\" title=\"struct amethyst_utils::tag::Tag\">Tag</a>&lt;T&gt;&gt;: SystemData&lt;'a&gt;,&nbsp;</span>",synthetic:false,types:["amethyst_utils::tag::TagFinder"]},];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
