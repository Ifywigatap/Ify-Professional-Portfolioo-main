import { useState, useRef } from 'react';
import { Star } from 'lucide-react';
import ReactCrop, { centerCrop, makeAspectCrop } from 'react-image-crop';
import Button from './Button';
import 'react-image-crop/dist/ReactCrop.css';

const StarInput = ({ rating, setRating }) => {
  const [hover, setHover] = useState(0);
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, index) => {
        const ratingValue = index + 1;
        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
              className="hidden"
            />
            <Star
              className="w-6 h-6 cursor-pointer transition-colors"
              color={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
              fill={ratingValue <= (hover || rating) ? '#ffc107' : 'none'}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(0)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default function TestimonialForm() {
  const [form, setForm] = useState({ name: '', role: '', text: '', website: '' });
  const [rating, setRating] = useState(0);
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [imgSrc, setImgSrc] = useState('');
  const [crop, setCrop] = useState();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const imgRef = useRef(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) {
      setFile(null);
      setPreview(null);
      setImgSrc('');
      return;
    }

    // 2MB file size limit
    if (selectedFile.size > 2 * 1024 * 1024) {
      setMessage('File is too large. Please select an image under 2MB.');
      setFile(null);
      setPreview(null);
      setImgSrc('');
      e.target.value = null; // Clear the file input so user can re-select
    } else {
      setMessage(''); // Clear any previous error message
      const reader = new FileReader();
      reader.addEventListener('load', () => setImgSrc(reader.result?.toString() || ''));
      reader.readAsDataURL(selectedFile);
    }
  };

  const onImageLoad = (e) => {
    const { width, height } = e.currentTarget;
    const crop = centerCrop(
      makeAspectCrop({ unit: '%', width: 90 }, 1, width, height),
      width,
      height
    );
    setCrop(crop);
  };

  const handleCrop = async () => {
    if (!imgRef.current || !crop || !crop.width || !crop.height) return;

    const image = imgRef.current;
    const canvas = document.createElement('canvas');
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext('2d');

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    canvas.toBlob((blob) => {
      if (!blob) return;
      const croppedFile = new File([blob], 'profile.jpg', { type: 'image/jpeg' });
      setFile(croppedFile);
      setPreview(URL.createObjectURL(croppedFile));
      setImgSrc(''); // Close the cropper modal
    }, 'image/jpeg');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (rating === 0) {
      setMessage('Please provide a star rating.');
      return;
    }
    setLoading(true);
    setMessage('');

    const formData = new FormData();
    formData.append('name', form.name);
    formData.append('role', form.role);
    formData.append('text', form.text);
    formData.append('website', form.website);
    formData.append('rating', rating);
    if (file) {
      formData.append('image', file);
    }

    try {
      const res = await fetch('/api/testimonial', { method: 'POST', body: formData });

      if (res.ok) {
        setMessage('Thank you! Your testimonial has been submitted for review.');
        setForm({ name: '', role: '', text: '', website: '' });
        setRating(0);
        setFile(null);
        setPreview(null);
        setImgSrc('');
        document.getElementById('image').value = null; // Clear file input on successful submission
      } else {
        const data = await res.json();
        setMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Testimonial submission error:', error);
      setMessage('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-center">Leave a Testimonial</h2>
      <p className="text-gray mb-6 text-center">Share your experience working with me or learning at the academy.</p>

      {imgSrc && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="bg-dark p-6 rounded-2xl max-w-lg w-full">
            <h3 className="text-xl font-bold mb-4">Crop Your Image</h3>
            <ReactCrop crop={crop} onChange={c => setCrop(c)} aspect={1} circularCrop>
              <img ref={imgRef} src={imgSrc} onLoad={onImageLoad} alt="Crop preview" style={{ maxHeight: '70vh' }} />
            </ReactCrop>
            <div className="flex gap-4 mt-4">
              <Button onClick={handleCrop} className="flex-1 justify-center">Crop Image</Button>
              <Button onClick={() => setImgSrc('')} variant="outline" className="flex-1 justify-center">Cancel</Button>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="card space-y-4">
        {/* Honeypot Field: Visually hidden field to catch bots */}
        <div className="absolute w-px h-px overflow-hidden -left-[5000px]" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input
            type="text"
            id="website"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={form.website}
            onChange={handleChange}
          />
        </div>
        <div className="grid md:grid-cols-2 gap-4"><label>Your Name<input name="name" value={form.name} onChange={handleChange} className="w-full rounded-xl bg-white border border-line px-4 py-3 text-slate-800 mt-1" required /></label><label>Your Role (e.g., "Business Owner")<input name="role" value={form.role} onChange={handleChange} className="w-full rounded-xl bg-white border border-line px-4 py-3 text-slate-800 mt-1" required /></label></div>
        <div><label className="block text-sm mb-1">Your Rating</label><StarInput rating={rating} setRating={setRating} /></div>
        <div>
          <label htmlFor="image" className="block text-sm mb-1">Profile Picture (Optional, max 2MB)</label>
          <input type="file" id="image" name="image" onChange={handleFileChange} accept="image/*" className="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20" />
          {preview && <img src={preview} alt="Profile preview" className="mt-4 w-24 h-24 rounded-full object-cover" />}
        </div>
        <div><label htmlFor="text" className="block text-sm mb-1">Your Feedback</label><textarea id="text" name="text" value={form.text} onChange={handleChange} className="w-full rounded-xl bg-white border border-line px-4 py-3 text-slate-800" rows="5" required></textarea></div>
        <Button type="submit" disabled={loading}>{loading ? 'Submitting...' : 'Submit Testimonial'}</Button>
        {message && <p className="mt-4 text-sm text-center text-slate-400">{message}</p>}
      </form>
    </div>
  );
}