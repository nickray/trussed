(function() {var implementors = {};
implementors["crypto_bigint"] = [{"text":"impl&lt;const LIMBS:&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.59.0/core/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;<a class=\"struct\" href=\"crypto_bigint/struct.Checked.html\" title=\"struct crypto_bigint::Checked\">Checked</a>&lt;<a class=\"struct\" href=\"crypto_bigint/struct.UInt.html\" title=\"struct crypto_bigint::UInt\">UInt</a>&lt;LIMBS&gt;&gt;&gt; for <a class=\"struct\" href=\"crypto_bigint/struct.Checked.html\" title=\"struct crypto_bigint::Checked\">Checked</a>&lt;<a class=\"struct\" href=\"crypto_bigint/struct.UInt.html\" title=\"struct crypto_bigint::UInt\">UInt</a>&lt;LIMBS&gt;&gt;","synthetic":false,"types":["crypto_bigint::checked::Checked"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;<a class=\"struct\" href=\"crypto_bigint/struct.Wrapping.html\" title=\"struct crypto_bigint::Wrapping\">Wrapping</a>&lt;<a class=\"struct\" href=\"crypto_bigint/limb/struct.Limb.html\" title=\"struct crypto_bigint::limb::Limb\">Limb</a>&gt;&gt; for <a class=\"struct\" href=\"crypto_bigint/struct.Wrapping.html\" title=\"struct crypto_bigint::Wrapping\">Wrapping</a>&lt;<a class=\"struct\" href=\"crypto_bigint/limb/struct.Limb.html\" title=\"struct crypto_bigint::limb::Limb\">Limb</a>&gt;","synthetic":false,"types":["crypto_bigint::wrapping::Wrapping"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;&amp;'_ <a class=\"struct\" href=\"crypto_bigint/struct.Wrapping.html\" title=\"struct crypto_bigint::Wrapping\">Wrapping</a>&lt;<a class=\"struct\" href=\"crypto_bigint/limb/struct.Limb.html\" title=\"struct crypto_bigint::limb::Limb\">Limb</a>&gt;&gt; for <a class=\"struct\" href=\"crypto_bigint/struct.Wrapping.html\" title=\"struct crypto_bigint::Wrapping\">Wrapping</a>&lt;<a class=\"struct\" href=\"crypto_bigint/limb/struct.Limb.html\" title=\"struct crypto_bigint::limb::Limb\">Limb</a>&gt;","synthetic":false,"types":["crypto_bigint::wrapping::Wrapping"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;<a class=\"struct\" href=\"crypto_bigint/struct.Wrapping.html\" title=\"struct crypto_bigint::Wrapping\">Wrapping</a>&lt;<a class=\"struct\" href=\"crypto_bigint/limb/struct.Limb.html\" title=\"struct crypto_bigint::limb::Limb\">Limb</a>&gt;&gt; for &amp;<a class=\"struct\" href=\"crypto_bigint/struct.Wrapping.html\" title=\"struct crypto_bigint::Wrapping\">Wrapping</a>&lt;<a class=\"struct\" href=\"crypto_bigint/limb/struct.Limb.html\" title=\"struct crypto_bigint::limb::Limb\">Limb</a>&gt;","synthetic":false,"types":["crypto_bigint::wrapping::Wrapping"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;&amp;'_ <a class=\"struct\" href=\"crypto_bigint/struct.Wrapping.html\" title=\"struct crypto_bigint::Wrapping\">Wrapping</a>&lt;<a class=\"struct\" href=\"crypto_bigint/limb/struct.Limb.html\" title=\"struct crypto_bigint::limb::Limb\">Limb</a>&gt;&gt; for &amp;<a class=\"struct\" href=\"crypto_bigint/struct.Wrapping.html\" title=\"struct crypto_bigint::Wrapping\">Wrapping</a>&lt;<a class=\"struct\" href=\"crypto_bigint/limb/struct.Limb.html\" title=\"struct crypto_bigint::limb::Limb\">Limb</a>&gt;","synthetic":false,"types":["crypto_bigint::wrapping::Wrapping"]},{"text":"impl&lt;const LIMBS:&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.59.0/core/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;<a class=\"struct\" href=\"crypto_bigint/struct.Wrapping.html\" title=\"struct crypto_bigint::Wrapping\">Wrapping</a>&lt;<a class=\"struct\" href=\"crypto_bigint/struct.UInt.html\" title=\"struct crypto_bigint::UInt\">UInt</a>&lt;LIMBS&gt;&gt;&gt; for <a class=\"struct\" href=\"crypto_bigint/struct.Wrapping.html\" title=\"struct crypto_bigint::Wrapping\">Wrapping</a>&lt;<a class=\"struct\" href=\"crypto_bigint/struct.UInt.html\" title=\"struct crypto_bigint::UInt\">UInt</a>&lt;LIMBS&gt;&gt;","synthetic":false,"types":["crypto_bigint::wrapping::Wrapping"]},{"text":"impl&lt;const LIMBS:&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.59.0/core/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;&amp;'_ <a class=\"struct\" href=\"crypto_bigint/struct.Wrapping.html\" title=\"struct crypto_bigint::Wrapping\">Wrapping</a>&lt;<a class=\"struct\" href=\"crypto_bigint/struct.UInt.html\" title=\"struct crypto_bigint::UInt\">UInt</a>&lt;LIMBS&gt;&gt;&gt; for <a class=\"struct\" href=\"crypto_bigint/struct.Wrapping.html\" title=\"struct crypto_bigint::Wrapping\">Wrapping</a>&lt;<a class=\"struct\" href=\"crypto_bigint/struct.UInt.html\" title=\"struct crypto_bigint::UInt\">UInt</a>&lt;LIMBS&gt;&gt;","synthetic":false,"types":["crypto_bigint::wrapping::Wrapping"]},{"text":"impl&lt;const LIMBS:&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.59.0/core/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;<a class=\"struct\" href=\"crypto_bigint/struct.Wrapping.html\" title=\"struct crypto_bigint::Wrapping\">Wrapping</a>&lt;<a class=\"struct\" href=\"crypto_bigint/struct.UInt.html\" title=\"struct crypto_bigint::UInt\">UInt</a>&lt;LIMBS&gt;&gt;&gt; for &amp;<a class=\"struct\" href=\"crypto_bigint/struct.Wrapping.html\" title=\"struct crypto_bigint::Wrapping\">Wrapping</a>&lt;<a class=\"struct\" href=\"crypto_bigint/struct.UInt.html\" title=\"struct crypto_bigint::UInt\">UInt</a>&lt;LIMBS&gt;&gt;","synthetic":false,"types":["crypto_bigint::wrapping::Wrapping"]},{"text":"impl&lt;const LIMBS:&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.59.0/core/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;&amp;'_ <a class=\"struct\" href=\"crypto_bigint/struct.Wrapping.html\" title=\"struct crypto_bigint::Wrapping\">Wrapping</a>&lt;<a class=\"struct\" href=\"crypto_bigint/struct.UInt.html\" title=\"struct crypto_bigint::UInt\">UInt</a>&lt;LIMBS&gt;&gt;&gt; for &amp;<a class=\"struct\" href=\"crypto_bigint/struct.Wrapping.html\" title=\"struct crypto_bigint::Wrapping\">Wrapping</a>&lt;<a class=\"struct\" href=\"crypto_bigint/struct.UInt.html\" title=\"struct crypto_bigint::UInt\">UInt</a>&lt;LIMBS&gt;&gt;","synthetic":false,"types":["crypto_bigint::wrapping::Wrapping"]}];
implementors["half"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;<a class=\"struct\" href=\"half/struct.bf16.html\" title=\"struct half::bf16\">bf16</a>&gt; for <a class=\"struct\" href=\"half/struct.bf16.html\" title=\"struct half::bf16\">bf16</a>","synthetic":false,"types":["half::bfloat::bf16"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;&amp;'_ <a class=\"struct\" href=\"half/struct.bf16.html\" title=\"struct half::bf16\">bf16</a>&gt; for <a class=\"struct\" href=\"half/struct.bf16.html\" title=\"struct half::bf16\">bf16</a>","synthetic":false,"types":["half::bfloat::bf16"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;&amp;'_ <a class=\"struct\" href=\"half/struct.bf16.html\" title=\"struct half::bf16\">bf16</a>&gt; for &amp;<a class=\"struct\" href=\"half/struct.bf16.html\" title=\"struct half::bf16\">bf16</a>","synthetic":false,"types":["half::bfloat::bf16"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;<a class=\"struct\" href=\"half/struct.bf16.html\" title=\"struct half::bf16\">bf16</a>&gt; for &amp;<a class=\"struct\" href=\"half/struct.bf16.html\" title=\"struct half::bf16\">bf16</a>","synthetic":false,"types":["half::bfloat::bf16"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;<a class=\"struct\" href=\"half/struct.f16.html\" title=\"struct half::f16\">f16</a>&gt; for <a class=\"struct\" href=\"half/struct.f16.html\" title=\"struct half::f16\">f16</a>","synthetic":false,"types":["half::binary16::f16"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;&amp;'_ <a class=\"struct\" href=\"half/struct.f16.html\" title=\"struct half::f16\">f16</a>&gt; for <a class=\"struct\" href=\"half/struct.f16.html\" title=\"struct half::f16\">f16</a>","synthetic":false,"types":["half::binary16::f16"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;&amp;'_ <a class=\"struct\" href=\"half/struct.f16.html\" title=\"struct half::f16\">f16</a>&gt; for &amp;<a class=\"struct\" href=\"half/struct.f16.html\" title=\"struct half::f16\">f16</a>","synthetic":false,"types":["half::binary16::f16"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;<a class=\"struct\" href=\"half/struct.f16.html\" title=\"struct half::f16\">f16</a>&gt; for &amp;<a class=\"struct\" href=\"half/struct.f16.html\" title=\"struct half::f16\">f16</a>","synthetic":false,"types":["half::binary16::f16"]}];
implementors["p256"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;<a class=\"struct\" href=\"p256/struct.Scalar.html\" title=\"struct p256::Scalar\">Scalar</a>&gt; for <a class=\"struct\" href=\"p256/struct.AffinePoint.html\" title=\"struct p256::AffinePoint\">AffinePoint</a>","synthetic":false,"types":["p256::arithmetic::affine::AffinePoint"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;&amp;'_ <a class=\"struct\" href=\"p256/struct.Scalar.html\" title=\"struct p256::Scalar\">Scalar</a>&gt; for <a class=\"struct\" href=\"p256/struct.AffinePoint.html\" title=\"struct p256::AffinePoint\">AffinePoint</a>","synthetic":false,"types":["p256::arithmetic::affine::AffinePoint"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;<a class=\"struct\" href=\"p256/struct.Scalar.html\" title=\"struct p256::Scalar\">Scalar</a>&gt; for <a class=\"struct\" href=\"p256/struct.ProjectivePoint.html\" title=\"struct p256::ProjectivePoint\">ProjectivePoint</a>","synthetic":false,"types":["p256::arithmetic::projective::ProjectivePoint"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;&amp;'_ <a class=\"struct\" href=\"p256/struct.Scalar.html\" title=\"struct p256::Scalar\">Scalar</a>&gt; for &amp;<a class=\"struct\" href=\"p256/struct.ProjectivePoint.html\" title=\"struct p256::ProjectivePoint\">ProjectivePoint</a>","synthetic":false,"types":["p256::arithmetic::projective::ProjectivePoint"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;&amp;'_ <a class=\"struct\" href=\"p256/struct.Scalar.html\" title=\"struct p256::Scalar\">Scalar</a>&gt; for <a class=\"struct\" href=\"p256/struct.ProjectivePoint.html\" title=\"struct p256::ProjectivePoint\">ProjectivePoint</a>","synthetic":false,"types":["p256::arithmetic::projective::ProjectivePoint"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;<a class=\"struct\" href=\"p256/struct.Scalar.html\" title=\"struct p256::Scalar\">Scalar</a>&gt; for <a class=\"struct\" href=\"p256/struct.Scalar.html\" title=\"struct p256::Scalar\">Scalar</a>","synthetic":false,"types":["p256::arithmetic::scalar::Scalar"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;&amp;'_ <a class=\"struct\" href=\"p256/struct.Scalar.html\" title=\"struct p256::Scalar\">Scalar</a>&gt; for &amp;<a class=\"struct\" href=\"p256/struct.Scalar.html\" title=\"struct p256::Scalar\">Scalar</a>","synthetic":false,"types":["p256::arithmetic::scalar::Scalar"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;&amp;'_ <a class=\"struct\" href=\"p256/struct.Scalar.html\" title=\"struct p256::Scalar\">Scalar</a>&gt; for <a class=\"struct\" href=\"p256/struct.Scalar.html\" title=\"struct p256::Scalar\">Scalar</a>","synthetic":false,"types":["p256::arithmetic::scalar::Scalar"]}];
implementors["salty"] = [{"text":"impl&lt;'a, 'b&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;&amp;'b <a class=\"struct\" href=\"salty/struct.EdwardsPoint.html\" title=\"struct salty::EdwardsPoint\">EdwardsPoint</a>&gt; for &amp;'a <a class=\"struct\" href=\"salty/struct.Scalar.html\" title=\"struct salty::Scalar\">Scalar</a>","synthetic":false,"types":["salty::scalar::Scalar"]},{"text":"impl&lt;'a, 'b&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;&amp;'b <a class=\"struct\" href=\"salty/struct.FieldElement.html\" title=\"struct salty::FieldElement\">FieldElement</a>&gt; for &amp;'a <a class=\"struct\" href=\"salty/struct.FieldElement.html\" title=\"struct salty::FieldElement\">FieldElement</a>","synthetic":false,"types":["salty::field::tweetnacl::FieldElement"]},{"text":"impl&lt;'a, 'b&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;&amp;'b <a class=\"struct\" href=\"salty/struct.Scalar.html\" title=\"struct salty::Scalar\">Scalar</a>&gt; for &amp;'a <a class=\"struct\" href=\"salty/struct.MontgomeryPoint.html\" title=\"struct salty::MontgomeryPoint\">MontgomeryPoint</a>","synthetic":false,"types":["salty::montgomery::MontgomeryPoint"]},{"text":"impl&lt;'a, 'b&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;&amp;'b <a class=\"struct\" href=\"salty/struct.MontgomeryPoint.html\" title=\"struct salty::MontgomeryPoint\">MontgomeryPoint</a>&gt; for &amp;'a <a class=\"struct\" href=\"salty/struct.Scalar.html\" title=\"struct salty::Scalar\">Scalar</a>","synthetic":false,"types":["salty::scalar::Scalar"]},{"text":"impl&lt;'a, 'b&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;&amp;'b <a class=\"struct\" href=\"salty/struct.Scalar.html\" title=\"struct salty::Scalar\">Scalar</a>&gt; for &amp;'a <a class=\"struct\" href=\"salty/struct.Scalar.html\" title=\"struct salty::Scalar\">Scalar</a>","synthetic":false,"types":["salty::scalar::Scalar"]}];
implementors["typenum"] = [{"text":"impl&lt;I:&nbsp;<a class=\"trait\" href=\"typenum/marker_traits/trait.Integer.html\" title=\"trait typenum::marker_traits::Integer\">Integer</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;I&gt; for <a class=\"struct\" href=\"typenum/int/struct.Z0.html\" title=\"struct typenum::int::Z0\">Z0</a>","synthetic":false,"types":["typenum::int::Z0"]},{"text":"impl&lt;U:&nbsp;<a class=\"trait\" href=\"typenum/marker_traits/trait.Unsigned.html\" title=\"trait typenum::marker_traits::Unsigned\">Unsigned</a> + <a class=\"trait\" href=\"typenum/marker_traits/trait.NonZero.html\" title=\"trait typenum::marker_traits::NonZero\">NonZero</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;<a class=\"struct\" href=\"typenum/int/struct.Z0.html\" title=\"struct typenum::int::Z0\">Z0</a>&gt; for <a class=\"struct\" href=\"typenum/int/struct.PInt.html\" title=\"struct typenum::int::PInt\">PInt</a>&lt;U&gt;","synthetic":false,"types":["typenum::int::PInt"]},{"text":"impl&lt;U:&nbsp;<a class=\"trait\" href=\"typenum/marker_traits/trait.Unsigned.html\" title=\"trait typenum::marker_traits::Unsigned\">Unsigned</a> + <a class=\"trait\" href=\"typenum/marker_traits/trait.NonZero.html\" title=\"trait typenum::marker_traits::NonZero\">NonZero</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;<a class=\"struct\" href=\"typenum/int/struct.Z0.html\" title=\"struct typenum::int::Z0\">Z0</a>&gt; for <a class=\"struct\" href=\"typenum/int/struct.NInt.html\" title=\"struct typenum::int::NInt\">NInt</a>&lt;U&gt;","synthetic":false,"types":["typenum::int::NInt"]},{"text":"impl&lt;Ul:&nbsp;<a class=\"trait\" href=\"typenum/marker_traits/trait.Unsigned.html\" title=\"trait typenum::marker_traits::Unsigned\">Unsigned</a> + <a class=\"trait\" href=\"typenum/marker_traits/trait.NonZero.html\" title=\"trait typenum::marker_traits::NonZero\">NonZero</a>, Ur:&nbsp;<a class=\"trait\" href=\"typenum/marker_traits/trait.Unsigned.html\" title=\"trait typenum::marker_traits::Unsigned\">Unsigned</a> + <a class=\"trait\" href=\"typenum/marker_traits/trait.NonZero.html\" title=\"trait typenum::marker_traits::NonZero\">NonZero</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;<a class=\"struct\" href=\"typenum/int/struct.PInt.html\" title=\"struct typenum::int::PInt\">PInt</a>&lt;Ur&gt;&gt; for <a class=\"struct\" href=\"typenum/int/struct.PInt.html\" title=\"struct typenum::int::PInt\">PInt</a>&lt;Ul&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Ul: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;Ur&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;Ul as <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;Ur&gt;&gt;::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/1.59.0/core/ops/arith/trait.Mul.html#associatedtype.Output\" title=\"type core::ops::arith::Mul::Output\">Output</a>: <a class=\"trait\" href=\"typenum/marker_traits/trait.Unsigned.html\" title=\"trait typenum::marker_traits::Unsigned\">Unsigned</a> + <a class=\"trait\" href=\"typenum/marker_traits/trait.NonZero.html\" title=\"trait typenum::marker_traits::NonZero\">NonZero</a>,&nbsp;</span>","synthetic":false,"types":["typenum::int::PInt"]},{"text":"impl&lt;Ul:&nbsp;<a class=\"trait\" href=\"typenum/marker_traits/trait.Unsigned.html\" title=\"trait typenum::marker_traits::Unsigned\">Unsigned</a> + <a class=\"trait\" href=\"typenum/marker_traits/trait.NonZero.html\" title=\"trait typenum::marker_traits::NonZero\">NonZero</a>, Ur:&nbsp;<a class=\"trait\" href=\"typenum/marker_traits/trait.Unsigned.html\" title=\"trait typenum::marker_traits::Unsigned\">Unsigned</a> + <a class=\"trait\" href=\"typenum/marker_traits/trait.NonZero.html\" title=\"trait typenum::marker_traits::NonZero\">NonZero</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;<a class=\"struct\" href=\"typenum/int/struct.NInt.html\" title=\"struct typenum::int::NInt\">NInt</a>&lt;Ur&gt;&gt; for <a class=\"struct\" href=\"typenum/int/struct.NInt.html\" title=\"struct typenum::int::NInt\">NInt</a>&lt;Ul&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Ul: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;Ur&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;Ul as <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;Ur&gt;&gt;::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/1.59.0/core/ops/arith/trait.Mul.html#associatedtype.Output\" title=\"type core::ops::arith::Mul::Output\">Output</a>: <a class=\"trait\" href=\"typenum/marker_traits/trait.Unsigned.html\" title=\"trait typenum::marker_traits::Unsigned\">Unsigned</a> + <a class=\"trait\" href=\"typenum/marker_traits/trait.NonZero.html\" title=\"trait typenum::marker_traits::NonZero\">NonZero</a>,&nbsp;</span>","synthetic":false,"types":["typenum::int::NInt"]},{"text":"impl&lt;Ul:&nbsp;<a class=\"trait\" href=\"typenum/marker_traits/trait.Unsigned.html\" title=\"trait typenum::marker_traits::Unsigned\">Unsigned</a> + <a class=\"trait\" href=\"typenum/marker_traits/trait.NonZero.html\" title=\"trait typenum::marker_traits::NonZero\">NonZero</a>, Ur:&nbsp;<a class=\"trait\" href=\"typenum/marker_traits/trait.Unsigned.html\" title=\"trait typenum::marker_traits::Unsigned\">Unsigned</a> + <a class=\"trait\" href=\"typenum/marker_traits/trait.NonZero.html\" title=\"trait typenum::marker_traits::NonZero\">NonZero</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;<a class=\"struct\" href=\"typenum/int/struct.NInt.html\" title=\"struct typenum::int::NInt\">NInt</a>&lt;Ur&gt;&gt; for <a class=\"struct\" href=\"typenum/int/struct.PInt.html\" title=\"struct typenum::int::PInt\">PInt</a>&lt;Ul&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Ul: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;Ur&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;Ul as <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;Ur&gt;&gt;::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/1.59.0/core/ops/arith/trait.Mul.html#associatedtype.Output\" title=\"type core::ops::arith::Mul::Output\">Output</a>: <a class=\"trait\" href=\"typenum/marker_traits/trait.Unsigned.html\" title=\"trait typenum::marker_traits::Unsigned\">Unsigned</a> + <a class=\"trait\" href=\"typenum/marker_traits/trait.NonZero.html\" title=\"trait typenum::marker_traits::NonZero\">NonZero</a>,&nbsp;</span>","synthetic":false,"types":["typenum::int::PInt"]},{"text":"impl&lt;Ul:&nbsp;<a class=\"trait\" href=\"typenum/marker_traits/trait.Unsigned.html\" title=\"trait typenum::marker_traits::Unsigned\">Unsigned</a> + <a class=\"trait\" href=\"typenum/marker_traits/trait.NonZero.html\" title=\"trait typenum::marker_traits::NonZero\">NonZero</a>, Ur:&nbsp;<a class=\"trait\" href=\"typenum/marker_traits/trait.Unsigned.html\" title=\"trait typenum::marker_traits::Unsigned\">Unsigned</a> + <a class=\"trait\" href=\"typenum/marker_traits/trait.NonZero.html\" title=\"trait typenum::marker_traits::NonZero\">NonZero</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;<a class=\"struct\" href=\"typenum/int/struct.PInt.html\" title=\"struct typenum::int::PInt\">PInt</a>&lt;Ur&gt;&gt; for <a class=\"struct\" href=\"typenum/int/struct.NInt.html\" title=\"struct typenum::int::NInt\">NInt</a>&lt;Ul&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Ul: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;Ur&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;Ul as <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;Ur&gt;&gt;::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/1.59.0/core/ops/arith/trait.Mul.html#associatedtype.Output\" title=\"type core::ops::arith::Mul::Output\">Output</a>: <a class=\"trait\" href=\"typenum/marker_traits/trait.Unsigned.html\" title=\"trait typenum::marker_traits::Unsigned\">Unsigned</a> + <a class=\"trait\" href=\"typenum/marker_traits/trait.NonZero.html\" title=\"trait typenum::marker_traits::NonZero\">NonZero</a>,&nbsp;</span>","synthetic":false,"types":["typenum::int::NInt"]},{"text":"impl&lt;U:&nbsp;<a class=\"trait\" href=\"typenum/marker_traits/trait.Unsigned.html\" title=\"trait typenum::marker_traits::Unsigned\">Unsigned</a>, B:&nbsp;<a class=\"trait\" href=\"typenum/marker_traits/trait.Bit.html\" title=\"trait typenum::marker_traits::Bit\">Bit</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;<a class=\"struct\" href=\"typenum/bit/struct.B0.html\" title=\"struct typenum::bit::B0\">B0</a>&gt; for <a class=\"struct\" href=\"typenum/uint/struct.UInt.html\" title=\"struct typenum::uint::UInt\">UInt</a>&lt;U, B&gt;","synthetic":false,"types":["typenum::uint::UInt"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;<a class=\"struct\" href=\"typenum/bit/struct.B0.html\" title=\"struct typenum::bit::B0\">B0</a>&gt; for <a class=\"struct\" href=\"typenum/uint/struct.UTerm.html\" title=\"struct typenum::uint::UTerm\">UTerm</a>","synthetic":false,"types":["typenum::uint::UTerm"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;<a class=\"struct\" href=\"typenum/bit/struct.B1.html\" title=\"struct typenum::bit::B1\">B1</a>&gt; for <a class=\"struct\" href=\"typenum/uint/struct.UTerm.html\" title=\"struct typenum::uint::UTerm\">UTerm</a>","synthetic":false,"types":["typenum::uint::UTerm"]},{"text":"impl&lt;U:&nbsp;<a class=\"trait\" href=\"typenum/marker_traits/trait.Unsigned.html\" title=\"trait typenum::marker_traits::Unsigned\">Unsigned</a>, B:&nbsp;<a class=\"trait\" href=\"typenum/marker_traits/trait.Bit.html\" title=\"trait typenum::marker_traits::Bit\">Bit</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;<a class=\"struct\" href=\"typenum/bit/struct.B1.html\" title=\"struct typenum::bit::B1\">B1</a>&gt; for <a class=\"struct\" href=\"typenum/uint/struct.UInt.html\" title=\"struct typenum::uint::UInt\">UInt</a>&lt;U, B&gt;","synthetic":false,"types":["typenum::uint::UInt"]},{"text":"impl&lt;U:&nbsp;<a class=\"trait\" href=\"typenum/marker_traits/trait.Unsigned.html\" title=\"trait typenum::marker_traits::Unsigned\">Unsigned</a>, B:&nbsp;<a class=\"trait\" href=\"typenum/marker_traits/trait.Bit.html\" title=\"trait typenum::marker_traits::Bit\">Bit</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;<a class=\"struct\" href=\"typenum/uint/struct.UTerm.html\" title=\"struct typenum::uint::UTerm\">UTerm</a>&gt; for <a class=\"struct\" href=\"typenum/uint/struct.UInt.html\" title=\"struct typenum::uint::UInt\">UInt</a>&lt;U, B&gt;","synthetic":false,"types":["typenum::uint::UInt"]},{"text":"impl&lt;U:&nbsp;<a class=\"trait\" href=\"typenum/marker_traits/trait.Unsigned.html\" title=\"trait typenum::marker_traits::Unsigned\">Unsigned</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;U&gt; for <a class=\"struct\" href=\"typenum/uint/struct.UTerm.html\" title=\"struct typenum::uint::UTerm\">UTerm</a>","synthetic":false,"types":["typenum::uint::UTerm"]},{"text":"impl&lt;Ul:&nbsp;<a class=\"trait\" href=\"typenum/marker_traits/trait.Unsigned.html\" title=\"trait typenum::marker_traits::Unsigned\">Unsigned</a>, B:&nbsp;<a class=\"trait\" href=\"typenum/marker_traits/trait.Bit.html\" title=\"trait typenum::marker_traits::Bit\">Bit</a>, Ur:&nbsp;<a class=\"trait\" href=\"typenum/marker_traits/trait.Unsigned.html\" title=\"trait typenum::marker_traits::Unsigned\">Unsigned</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;<a class=\"struct\" href=\"typenum/uint/struct.UInt.html\" title=\"struct typenum::uint::UInt\">UInt</a>&lt;Ur, B&gt;&gt; for <a class=\"struct\" href=\"typenum/uint/struct.UInt.html\" title=\"struct typenum::uint::UInt\">UInt</a>&lt;Ul, <a class=\"struct\" href=\"typenum/bit/struct.B0.html\" title=\"struct typenum::bit::B0\">B0</a>&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Ul: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;<a class=\"struct\" href=\"typenum/uint/struct.UInt.html\" title=\"struct typenum::uint::UInt\">UInt</a>&lt;Ur, B&gt;&gt;,&nbsp;</span>","synthetic":false,"types":["typenum::uint::UInt"]},{"text":"impl&lt;Ul:&nbsp;<a class=\"trait\" href=\"typenum/marker_traits/trait.Unsigned.html\" title=\"trait typenum::marker_traits::Unsigned\">Unsigned</a>, B:&nbsp;<a class=\"trait\" href=\"typenum/marker_traits/trait.Bit.html\" title=\"trait typenum::marker_traits::Bit\">Bit</a>, Ur:&nbsp;<a class=\"trait\" href=\"typenum/marker_traits/trait.Unsigned.html\" title=\"trait typenum::marker_traits::Unsigned\">Unsigned</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;<a class=\"struct\" href=\"typenum/uint/struct.UInt.html\" title=\"struct typenum::uint::UInt\">UInt</a>&lt;Ur, B&gt;&gt; for <a class=\"struct\" href=\"typenum/uint/struct.UInt.html\" title=\"struct typenum::uint::UInt\">UInt</a>&lt;Ul, <a class=\"struct\" href=\"typenum/bit/struct.B1.html\" title=\"struct typenum::bit::B1\">B1</a>&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Ul: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;<a class=\"struct\" href=\"typenum/uint/struct.UInt.html\" title=\"struct typenum::uint::UInt\">UInt</a>&lt;Ur, B&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"typenum/uint/struct.UInt.html\" title=\"struct typenum::uint::UInt\">UInt</a>&lt;<a class=\"type\" href=\"typenum/operator_aliases/type.Prod.html\" title=\"type typenum::operator_aliases::Prod\">Prod</a>&lt;Ul, <a class=\"struct\" href=\"typenum/uint/struct.UInt.html\" title=\"struct typenum::uint::UInt\">UInt</a>&lt;Ur, B&gt;&gt;, <a class=\"struct\" href=\"typenum/bit/struct.B0.html\" title=\"struct typenum::bit::B0\">B0</a>&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/ops/arith/trait.Add.html\" title=\"trait core::ops::arith::Add\">Add</a>&lt;<a class=\"struct\" href=\"typenum/uint/struct.UInt.html\" title=\"struct typenum::uint::UInt\">UInt</a>&lt;Ur, B&gt;&gt;,&nbsp;</span>","synthetic":false,"types":["typenum::uint::UInt"]},{"text":"impl&lt;Rhs&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;Rhs&gt; for <a class=\"struct\" href=\"typenum/array/struct.ATerm.html\" title=\"struct typenum::array::ATerm\">ATerm</a>","synthetic":false,"types":["typenum::array::ATerm"]},{"text":"impl&lt;V, A, Rhs&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;Rhs&gt; for <a class=\"struct\" href=\"typenum/array/struct.TArr.html\" title=\"struct typenum::array::TArr\">TArr</a>&lt;V, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;V: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;Rhs&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;Rhs&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;Rhs: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>,&nbsp;</span>","synthetic":false,"types":["typenum::array::TArr"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;<a class=\"struct\" href=\"typenum/array/struct.ATerm.html\" title=\"struct typenum::array::ATerm\">ATerm</a>&gt; for <a class=\"struct\" href=\"typenum/int/struct.Z0.html\" title=\"struct typenum::int::Z0\">Z0</a>","synthetic":false,"types":["typenum::int::Z0"]},{"text":"impl&lt;U&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;<a class=\"struct\" href=\"typenum/array/struct.ATerm.html\" title=\"struct typenum::array::ATerm\">ATerm</a>&gt; for <a class=\"struct\" href=\"typenum/int/struct.PInt.html\" title=\"struct typenum::int::PInt\">PInt</a>&lt;U&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;U: <a class=\"trait\" href=\"typenum/marker_traits/trait.Unsigned.html\" title=\"trait typenum::marker_traits::Unsigned\">Unsigned</a> + <a class=\"trait\" href=\"typenum/marker_traits/trait.NonZero.html\" title=\"trait typenum::marker_traits::NonZero\">NonZero</a>,&nbsp;</span>","synthetic":false,"types":["typenum::int::PInt"]},{"text":"impl&lt;U&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;<a class=\"struct\" href=\"typenum/array/struct.ATerm.html\" title=\"struct typenum::array::ATerm\">ATerm</a>&gt; for <a class=\"struct\" href=\"typenum/int/struct.NInt.html\" title=\"struct typenum::int::NInt\">NInt</a>&lt;U&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;U: <a class=\"trait\" href=\"typenum/marker_traits/trait.Unsigned.html\" title=\"trait typenum::marker_traits::Unsigned\">Unsigned</a> + <a class=\"trait\" href=\"typenum/marker_traits/trait.NonZero.html\" title=\"trait typenum::marker_traits::NonZero\">NonZero</a>,&nbsp;</span>","synthetic":false,"types":["typenum::int::NInt"]},{"text":"impl&lt;V, A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;<a class=\"struct\" href=\"typenum/array/struct.TArr.html\" title=\"struct typenum::array::TArr\">TArr</a>&lt;V, A&gt;&gt; for <a class=\"struct\" href=\"typenum/int/struct.Z0.html\" title=\"struct typenum::int::Z0\">Z0</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"typenum/int/struct.Z0.html\" title=\"struct typenum::int::Z0\">Z0</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;A&gt;,&nbsp;</span>","synthetic":false,"types":["typenum::int::Z0"]},{"text":"impl&lt;V, A, U&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;<a class=\"struct\" href=\"typenum/array/struct.TArr.html\" title=\"struct typenum::array::TArr\">TArr</a>&lt;V, A&gt;&gt; for <a class=\"struct\" href=\"typenum/int/struct.PInt.html\" title=\"struct typenum::int::PInt\">PInt</a>&lt;U&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;U: <a class=\"trait\" href=\"typenum/marker_traits/trait.Unsigned.html\" title=\"trait typenum::marker_traits::Unsigned\">Unsigned</a> + <a class=\"trait\" href=\"typenum/marker_traits/trait.NonZero.html\" title=\"trait typenum::marker_traits::NonZero\">NonZero</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"typenum/int/struct.PInt.html\" title=\"struct typenum::int::PInt\">PInt</a>&lt;U&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;A&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;V&gt;,&nbsp;</span>","synthetic":false,"types":["typenum::int::PInt"]},{"text":"impl&lt;V, A, U&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;<a class=\"struct\" href=\"typenum/array/struct.TArr.html\" title=\"struct typenum::array::TArr\">TArr</a>&lt;V, A&gt;&gt; for <a class=\"struct\" href=\"typenum/int/struct.NInt.html\" title=\"struct typenum::int::NInt\">NInt</a>&lt;U&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;U: <a class=\"trait\" href=\"typenum/marker_traits/trait.Unsigned.html\" title=\"trait typenum::marker_traits::Unsigned\">Unsigned</a> + <a class=\"trait\" href=\"typenum/marker_traits/trait.NonZero.html\" title=\"trait typenum::marker_traits::NonZero\">NonZero</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"typenum/int/struct.NInt.html\" title=\"struct typenum::int::NInt\">NInt</a>&lt;U&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;A&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;V&gt;,&nbsp;</span>","synthetic":false,"types":["typenum::int::NInt"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()