interface Props {
  children: React.ReactNode;
}

export const TopographyBG: React.FC<Props> = ({ children }) => {
  return (
    <div
      className="bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('/topography.svg')`,
      }}
    >
      {children}
    </div>
  );
};
