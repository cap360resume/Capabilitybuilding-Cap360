UPDATE public.blog_posts
SET is_published = true,
    published_at = COALESCE(published_at, now()),
    category = COALESCE(NULLIF(category, ''), 'CAP360 Perspective')
WHERE id = '6b8679c9-16d5-4af9-aa1f-3c7f0d0a3fac';