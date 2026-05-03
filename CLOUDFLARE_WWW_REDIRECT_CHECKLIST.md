# Cloudflare www to apex redirect checklist

The canonical Corentis website is:

```text
https://corentis.co.uk/
```

Use Cloudflare Bulk Redirects so the `www` domain permanently redirects to the apex domain.

## Cloudflare dashboard steps

1. Go to the Cloudflare Dashboard.
2. Open **Bulk Redirects**.
3. Create a bulk redirect list.
4. Add the source URL:

```text
www.corentis.co.uk
```

5. Add the target URL:

```text
https://corentis.co.uk
```

6. Set the status code to:

```text
301
```

7. Enable or preserve:

- preserve query string
- subpath matching
- preserve path suffix

8. Create the bulk redirect rule using that list.
9. Go to **DNS**.
10. Confirm there is a proxied `www` DNS record configured as Cloudflare requires for the
    redirect.

## Tests

Run:

```text
curl -I https://www.corentis.co.uk/
```

Expected result:

```text
HTTP 301 with location header pointing to https://corentis.co.uk/
```

Also test a path:

```text
curl -I https://www.corentis.co.uk/resources
```

Expected result:

```text
HTTP 301 with location header pointing to https://corentis.co.uk/resources
```

The acceptable fallback is that `www` and apex both serve the same latest content, but the preferred
setup is a permanent `www` to apex redirect.
